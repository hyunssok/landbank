import styled from '@emotion/styled';
import { unit, IMG_URI, munit } from '@shared/utils/base';
import { backgroundImageCover, mobilePoint } from '@styles/globalStyles';

const IMG_SUBBG = `${IMG_URI}/sub_bg.png`;

export const Container = styled.section`
	/* padding: ${unit(81)} ${unit(341)} ${unit(68)}; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 100vh;
	padding-bottom: ${unit(100)};
	font-family: NotoSansCJKkr;
	width: 100%;

	@media screen and (max-width: ${mobilePoint}) {
		padding: ${munit(47)} ${munit(92)} ${munit(275)};
		height: 100vh;
	}
`;

export const InnerArticle = styled.article`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const BgFigure = styled.figure`
	${backgroundImageCover};
	background-image: url(${IMG_SUBBG});
	background-size: 100% auto;
	z-index: 99;
	width: 100%;
	min-height: ${unit(701)};
	position: absolute;
	bottom: ${unit(-120)};
	left: 0;

	@media screen and (max-width: ${mobilePoint}) {
		min-height: ${munit(701)};

		&:nth-child(1) {
			top: 0;
			bottom: unset;
			background-position: 25% 170%;
			background-size: 514% 125%;
		}
		&:nth-child(4) {
			background-position: center;
			background-size: 324% 115% !important;
			background-position: 59% 71% !important;
			transform: rotate(2deg);
		}
	}
`;

export const VideoBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	z-index: 1000;
	gap: ${unit(28)};
	width: ${unit(1180)};

	.youtubeVideo {
		width: calc((100% - ${unit(28)} * 2) / 3) !important;
		iframe {
			width: 100%;
			height: ${unit(222)} !important;
		}
	}

	@media screen and (max-width: ${mobilePoint}) {
		flex-direction: column;
		gap: ${munit(45)};
		.youtubeVideo {
			width: 100% !important;
			iframe {
				width: 100%;
				height: ${munit(315)} !important;
			}
		}
	}
`;
