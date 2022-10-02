import styled from '@emotion/styled';
import { IMG_URI, munit, unit } from '@shared/utils/base';
import { mobilePoint } from '@styles/globalStyles';

export const Container = styled.main<{ isLast: boolean }>`
	width: 100%;
	height: 100vh;
	position: relative;

	.swiper-button-prev,
	.swiper-button-next {
		display: none;
	}

	@media screen and (max-width: ${mobilePoint}) {
		.swiper-pagination-bullets {
			display: none;
		}
		.swiper-button-next {
			position: absolute;
			display: ${(props) => (props.isLast ? 'none' : 'block')};
			bottom: ${munit(60)};
			left: 50%;
			transform: translateX(-50%);
			width: ${munit(120)};
			height: ${munit(70)};
			z-index: 1000;
			transition: background-color 0.2s ease, color 0.2s ease;
			background-image: url('${IMG_URI}/arrowbottom.png');
			background-size: 100% 70%;
			background-repeat: no-repeat;

			&::after {
				font-size: 16px;
			}
		}
	}

	.swiper-pagination-bullets {
		left: ${unit(180)};
		width: ${unit(16)};

		.swiper-pagination-bullet {
			width: ${unit(16)};
			height: ${unit(16)};
			margin: ${unit(48)} 0;
			background-color: #cccccc;
			opacity: 1;
		}

		.swiper-pagination-bullet-active {
			background-color: #c80000;
		}
	}
`;
