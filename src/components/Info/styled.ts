import styled from '@emotion/styled';
import { IMG_URI, munit, unit } from '@shared/utils/base';
import { backgroundImageCover } from '@styles/globalStyles';
import { mobilePoint } from '@styles/globalStyles';

const ICON_CHECK = `${IMG_URI}/icon_check.png`;
const INFO_BG = `${IMG_URI}/infobg.png`;

export const Container = styled.section`
	${backgroundImageCover};
	background-image: url(${INFO_BG});
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: NotoSansCJKkr;
	width: 100%;
	height: 100vh;
	padding-bottom: ${unit(100)};

	@media screen and (max-width: ${mobilePoint}) {
		background-position: 27% !important;
		padding: ${munit(109)} 0 ${munit(211)};
		margin: 0 auto;
	}
`;

export const InfoTitle = styled.p`
	font-size: ${unit(43)};
	margin-bottom: ${unit(69)};
	font-weight: bold;
	color: #fff;

	@media screen and (max-width: ${mobilePoint}) {
		white-space: pre-wrap;
		font-size: ${munit(43)};
		margin-bottom: ${munit(50)};
		line-height: 1.6;
	}
`;

export const InfoUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: ${unit(120)};
	@media screen and (max-width: ${mobilePoint}) {
		margin-bottom: ${munit(50)};
		flex-wrap: wrap;
		gap: ${munit(30)};
	}
`;

export const InfoLi = styled.li`
	border-radius: 50%;
	padding: ${unit(18)};
	border: solid ${unit(3)} #fff;
	margin-right: ${unit(55)};
	box-shadow: 0 0 9.9px 0.1px rgba(0, 0, 0, 0.6);

	&:nth-child(4) {
		margin-right: 0;
	}

	@media screen and (max-width: ${mobilePoint}) {
		padding: ${munit(18)};
		border: solid ${munit(3)} #fff;
		margin-right: unset;
	}
`;

export const InfoP = styled.p`
	width: ${unit(203)};
	height: ${unit(202)};
	line-height: ${unit(45)};
	font-size: ${unit(30)};
	background-color: #c80000;
	border-radius: 50%;
	color: #fff;
	text-shadow: 0 0 9.9px rgba(0, 0, 0, 0.6);
	white-space: pre-wrap;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: ${mobilePoint}) {
		width: ${munit(217)};
		height: ${munit(217)};
		font-size: ${munit(32)};
		line-height: 1.61;
	}
`;

export const CheckUl = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	margin: 0 auto;
	width: ${unit(850)};

	@media screen and (max-width: ${mobilePoint}) {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding-left: ${munit(141)};
	}
`;

export const CheckLi = styled.li`
	display: flex;
	align-items: center;
	width: calc(100% / 2);
	margin-bottom: ${unit(26)};

	&:nth-child(4) {
		span {
			padding-left: ${unit(46)};
			width: auto;
		}
	}
	&:last-child {
		margin-bottom: 0;
	}

	p {
		color: #ccc;
		font-size: ${unit(24)};
	}

	span {
		width: ${unit(120)};
		color: #fff;
		font-size: ${unit(30)};
		position: relative;
		padding-left: ${unit(20)};

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(-50%, -50%);
			${backgroundImageCover}
			width: ${unit(37)};
			height: ${unit(37)};
			background-image: url(${ICON_CHECK});
			background-size: ${unit(37)} auto;
		}
	}

	@media screen and (max-width: ${mobilePoint}) {
		width: unset;
		margin-bottom: ${munit(30)};
		justify-content: flex-start;

		span {
			text-align: left;
			width: ${munit(140)};
			font-size: ${munit(34)};
			padding-left: ${munit(40)};

			&::before {
				content: '';
				width: ${munit(53)};
				height: ${munit(43)};
				background-size: ${munit(42)} auto;
			}
		}

		p {
			font-size: ${munit(27)};
		}

		&:nth-child(4) {
			span {
				text-align: center;
				width: ${munit(140)};
				padding-left: unset !important;
			}
		}
		&:nth-child(5) {
			span {
				width: unset;
			}
		}
	}
`;

export const Checkmark = styled.p`
	margin-top: ${unit(57)};
	font-size: ${unit(24)};
	color: #ccc;

	@media screen and (max-width: ${mobilePoint}) {
		white-space: pre-wrap;
		margin-top: ${munit(60)};
		font-size: ${munit(39)};
	}
`;
