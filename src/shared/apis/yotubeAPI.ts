import { AxiosResponse } from 'axios';
import { deleteRequest, getRequest, postRequest, putRequest } from './config';

const middlePath = 'youtube';

export default {
	get: async (): Promise<AxiosResponse> => {
		return getRequest(`${middlePath}/getYoutube9`);
	},
	// register: async (payload: any): Promise<AxiosResponse> => {
	// 	return postRequest(`${middlePath}/register`, payload);
	// },
	// edit: async (payload: any): Promise<AxiosResponse> => {
	// 	return putRequest(`${middlePath}/edit`, payload);
	// },
	// delete: async (id: number): Promise<AxiosResponse> => {
	// 	return deleteRequest(`${middlePath}/delete/${id}`);
	// },
};
