import axios from 'axios';

export const LOCAL_STORAGE_KEY = 'tozibankToken';

const headers = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}`,
	},
	withCredentials: true,
};

export const getRequest = async (url: string) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY);
	const request = await axios.get(`${url}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			withCredentials: true,
		},
	});
	return request;
};

export const postRequest = async (url: string, payload: any) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY);
	const request = await axios.post(`${url}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`,
			withCredentials: true,
		},
	});
	return request;
};

// export const postUploadRequest = async (url: string, payload: any) => {
// 	const request = await axios.post(`${url}`, payload, {
// 		headers: {
// 			'Content-Type': 'multipart/form-data',
// 		},
// 	});
// 	return request;
// };

export const deleteRequest = async (url: string) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY);
	const request = await axios.delete(`${url}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			withCredentials: true,
		},
	});
	return request;
};

export const putRequest = async (url: string, payload: any) => {
	const token = localStorage.getItem(LOCAL_STORAGE_KEY);
	const request = await axios.put(`${url}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`,
			withCredentials: true,
		},
	});
	return request;
};
