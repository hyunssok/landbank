import { css, keyframes, SerializedStyles } from '@emotion/react';

// 웹 색상표
export const Colors = {
	black333: '#333',
};

export const point = 1025;
export const mobilePoint = `${point}px`;

const fadeIn = keyframes`
	0% { opacity: 0; }
	100% { opacity: 1; }
`;

export const fadeInAnimate = css`
	animation-name: ${fadeIn};
	animation-duration: 1s;
	animation-iteration-count: 1;
`;

// 중복, 자주 사용
export const often = {
	centerX: css`
		position: absolute;
		transform: translateX(-50%);
		left: 50%;
	`,
	centerY: css`
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
	`,
	centerXY: css`
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	`,
};

export const hoverButton = css`
	&:hover {
		cursor: pointer;
	}
`;

export const backgroundImageCover = css`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const fixedTop = css`
	position: fixed;
	top: 0;
	left: 0;
`;

export const fixedBottom = css`
	position: fixed;
	bottom: 0;
	left: 0;
`;

export const flexRow = css`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const flexRowCenter = css`
	${flexRow}
	justify-content: center;
`;

export const flexRowBetween = css`
	${flexRow}
	justify-content: space-between;
`;

export const flexMobile = css`
	display: flex;
	flex-direction: column;
`;

export const scroller = css`
	overflow: auto;
	white-space: nowrap;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export const numberOfLines = (lineLength: number): SerializedStyles => css`
	overflow: hidden;
	text-overflow: ellipsis;
	line-clamp: ${lineLength};
	-webkit-line-clamp: ${lineLength};
	display: -webkit-box;
	-webkit-box-orient: vertical;
`;
