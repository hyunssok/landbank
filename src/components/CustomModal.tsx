import React, { FC } from 'react';
import { PrefixOfEmotion } from '@typings/base';
import styled from '@emotion/styled';

interface Props {
	children: React.ReactNode;
	style?: any;
	onClick?: any;
}

const CustomModal: FC<Props> = ({ children, style, onClick }) => {
	return (
		<S.FullModal onClick={onClick} style={style}>
			{children}
		</S.FullModal>
	);
};

export default CustomModal;

const S: PrefixOfEmotion = {};

S.FullModal = styled.article`
	position: fixed;
	width: 100vw;
	max-width: 100vw;
	min-height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;
