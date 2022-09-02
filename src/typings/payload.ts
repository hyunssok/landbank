export interface CreateUserPayload {
	userId: string;
	name: string;
	password: string;
	passwordConfirm: string;
}

export interface UpdateUserPayload {
	name: string;
	password: string;
	passwordConfirm: string;
}
