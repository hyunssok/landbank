// Common
export interface TokenInfoSchema {
	expiresIn: number;
	accessToken: string;
	refreshToken: string;
	user: UserSchema;
}

// APIs
export interface UserSchema {
	userId: string;
	name: string;
}
