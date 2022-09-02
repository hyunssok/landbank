import { AxiosResponse } from 'axios';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';
import { TokenInfoSchema, UserSchema } from '@typings/schema';
import { CreateUserPayload, UpdateUserPayload } from '@typings/payload';
import { getUser, createUser, updateUser, deleteUser } from '@shared/apis/_sample';
import { COOKIE_KEYS, COOKIE_EXPIRES, removeCookie, setCookie } from '@shared/utils/cookie';

export const USER_KEYS = {
	getUserMe: () => ['getUser'],
};

// Get
export const useGetUser = (logged: boolean): UseQueryResult<UserSchema> =>
	useQuery(USER_KEYS.getUserMe(), () => getUser(), {
		enabled: !!logged,
	});

// Post
export const useCreatUser = (): UseMutationResult<
	AxiosResponse<TokenInfoSchema>,
	unknown,
	CreateUserPayload,
	unknown
> =>
	useMutation((payload: CreateUserPayload) => createUser(payload), {
		onSuccess: (data) => {
			// TODO : Refresh Token 추가
			const { accessToken } = data?.data;
			if (accessToken) {
				setCookie(COOKIE_KEYS.ACCESS_TOKEN, accessToken, { maxAge: COOKIE_EXPIRES.ACCESS_TOKEN });
			}
		},
	});

// Update
export const useUpdateUser = (): UseMutationResult<AxiosResponse, unknown, UpdateUserPayload, unknown> =>
	useMutation((payload: UpdateUserPayload) => updateUser(payload));

// Delete
export const useDeleteUser = (): UseMutationResult<AxiosResponse, unknown, unknown, unknown> =>
	useMutation(deleteUser, {
		onSuccess: () => {
			removeCookie(COOKIE_KEYS.ACCESS_TOKEN);
			removeCookie(COOKIE_KEYS.REFRESH_TOKEN);
		},
	});
