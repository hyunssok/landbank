import { Dispatch, SetStateAction } from 'react';
import { StyledComponent } from '@emotion/styled/types/base';

export interface StringKeyAndVal {
	[key: string]: string;
}

export interface PrefixOfEmotion {
	[key: string]: StyledComponent<any>;
}

export interface Action {
	type: string;
	payload?: any;
}

export type CustomSetState<T> = Dispatch<SetStateAction<T>>;
