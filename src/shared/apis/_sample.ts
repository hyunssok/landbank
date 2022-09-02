import { AxiosResponse } from 'axios';
import { UserSchema } from '@typings/schema';
import { deleteRequest, getRequest, postRequest, putRequest } from './apiActions';
import { CreateUserPayload, UpdateUserPayload } from '@typings/payload';

// Paths
const PATH_USERS = '/users';
const PATHS = {
	GET_USER: `${PATH_USERS}`,
	CREATE_USER: `${PATH_USERS}`,
	UPDATE_USER: `${PATH_USERS}`,
	DELETE_USER: `${PATH_USERS}`,
};

// Get
export const getUser = (): Promise<AxiosResponse<UserSchema>> => getRequest(PATHS.GET_USER);

// Post
export const createUser = (payload: CreateUserPayload): Promise<AxiosResponse> =>
	postRequest(PATHS.CREATE_USER, payload);

// Update
export const updateUser = (payload: UpdateUserPayload): Promise<AxiosResponse> =>
	putRequest(PATHS.UPDATE_USER, payload);

// Delete
export const deleteUser = (): Promise<AxiosResponse> => deleteRequest(PATHS.DELETE_USER);
