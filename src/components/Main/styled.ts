import styled from '@emotion/styled';
import { IMG_URI, munit, unit } from '@shared/utils/base';
import { backgroundImageCover, mobilePoint } from '@styles/globalStyles';

const IMG_MAINBG = `${IMG_URI}/mainbg.png`;

export const Container = styled.section`
	${backgroundImageCover}
	height: 100vh;
	padding-bottom: ${unit(100)};
	background-image: url(${IMG_MAINBG});
	width: 100%;

	@media screen and (max-width: ${mobilePoint}) {
		background-image: none;
		background: linear-gradient(#e9473c, #fff);
	}
`;

export const IconBox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		width: ${unit(233)};
		height: ${unit(233)};
		border: solid ${unit(2.5)} #fff;
		background-color: #fff;
		border-radius: ${unit(20)};
		padding: ${unit(20)};
	}

	@media screen and (max-width: ${mobilePoint}) {
		img {
			width: ${munit(232)};
			height: ${munit(232)};
			border: solid ${munit(2.5)} #fff;
			background-color: #fff;
			border-radius: ${munit(20)};
			padding: ${munit(20)};
		}
	}
`;

export const PhBox = styled.p`
	color: #fff;
	width: ${unit(282)};
	height: ${unit(40)};
	border-radius: ${unit(20)};
	border: solid ${unit(2.5)} #fff;
	background-image: linear-gradient(to top, #e9473c, #de5454);
	font-size: ${unit(32)};
	line-height: ${unit(40)};
	margin-top: ${unit(21)};
	text-align: center;
	font-family: NotoSansCJKkr;

	@media screen and (max-width: ${mobilePoint}) {
		width: unset;
		height: unset;
		border-radius: unset;
		border: unset;
		background: unset;
		line-height: unset;
		margin-top: 0;
		font-size: ${munit(45)};
		margin-bottom: ${munit(58)};
		text-shadow: 0px 1px 13.5px rgba(0, 0, 0, 0.2);
		font-weight: bold;
	}
`;
