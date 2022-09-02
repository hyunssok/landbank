/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { COOKIE_KEYS, getCookie, removeCookie, setCookie } from '@shared/utils/cookie';
import { API_PATHS } from '@shared/constants';

const baseURL = process.env.API_URL;
const successHandler = (res: AxiosResponse): any => res.data;
const failureHandler = (error: any): never[] => {
	console.error('AXIOS ERROR:: ', error);
	return [];
};

// Main instance
const axiosApiInstance = axios.create({
	baseURL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

// Refresh-token instance
const axiosApiRefreshToken = axios.create({
	baseURL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json;charset=UTF-8',
	},
});

axiosApiInstance.interceptors.request.use(
	(config: AxiosRequestConfig): AxiosRequestConfig => {
		const accessTokenByCookies = getCookie(COOKIE_KEYS.ACCESS_TOKEN);
		if (accessTokenByCookies) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${accessTokenByCookies}`,
				withCredentials: true,
			};
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

axiosApiInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		if (error.response?.status === 401) {
			// 1. 세션 만료 시, API 재호출
			try {
				removeCookie(COOKIE_KEYS.ACCESS_TOKEN);
				const originalRequest = error.config;
				const refreshTokenByCookies: string = getCookie(COOKIE_KEYS.REFRESH_TOKEN);

				if (originalRequest && refreshTokenByCookies) {
					const getRefreshToken: AxiosResponse<{ accessToken: string; expiresIn: number }> =
						await axiosApiRefreshToken.get(API_PATHS.REFRESH_TOKEN);

					const { accessToken } = getRefreshToken?.data;
					if (accessToken) {
						setCookie(COOKIE_KEYS.ACCESS_TOKEN, accessToken);
						originalRequest.headers.Authorization = `Bearer ${accessToken}`;
						return axios(originalRequest);
					}
				}
			} catch (e) {
				// 2. 토큰 발급 실패, 로그아웃
				removeCookie(COOKIE_KEYS.ACCESS_TOKEN);
				removeCookie(COOKIE_KEYS.REFRESH_TOKEN);
				// window.location.href = `/?action=${VARS_REDIRECT.TOKEN_EXPIRED}`;
			}
		}
		return Promise.reject(error);
	},
);

axiosApiRefreshToken.interceptors.request.use(
	async (config) => {
		const refreshTokenByCookies = getCookie(COOKIE_KEYS.REFRESH_TOKEN);
		if (refreshTokenByCookies) {
			config.headers = {
				...config.headers,
				Authorization: `Bearer ${refreshTokenByCookies}`,
				withCredentials: true,
			};
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);

export const getRequest = (url: string): Promise<any> => {
	return axiosApiInstance.get(`${url}`).then(successHandler).catch(failureHandler);
};
export const postRequest = (url: string, payload: any): Promise<any> => {
	return axiosApiInstance.post(`${url}`, payload);
};

export const putRequest = (url: string, payload: any): Promise<any> => {
	return axiosApiInstance.put(`${url}`, payload);
};
export const deleteRequest = (url: string): Promise<any> => {
	return axiosApiInstance.delete(`${url}`);
};
