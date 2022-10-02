import styled from '@emotion/styled';
import { munit, unit } from '@shared/utils/base';
import { mobilePoint } from '@styles/globalStyles';

export const SearchBox = styled.div`
	background-color: #ff0000;
	margin-top: ${unit(36)};
	width: ${unit(442)};
	height: ${unit(74)};
	padding: ${unit(10)};
	display: flex;
	align-items: center;

	@media screen and (max-width: ${mobilePoint}) {
		margin-top: ${munit(47)};
		margin-bottom: ${munit(74)};
		width: ${munit(573)};
		height: ${munit(94)};
		padding: ${munit(15)};
	}
`;

export const InputBox = styled.div`
	display: flex;
	align-items: center;
	background-color: #fff;
	z-index: 999;
	width: ${unit(332)};
	height: ${unit(50)};
	border-radius: ${unit(3)};
	box-shadow: 0px 1px 13.5px 1.5px rgba(0, 0, 0, 0.2);
	padding: 0 ${unit(24)} 0 ${unit(12)};
	position: relative;

	& > img {
		&:nth-child(1) {
			width: ${unit(51)};
			height: ${unit(38)};
		}

		&:nth-child(3) {
			width: ${unit(29)};
			height: ${unit(18)};
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(-50%, -50%);
		}
	}

	& > p {
		font-size: ${unit(28)};
		color: #000;
		padding-left: ${unit(21)};
	}

	@media screen and (max-width: ${mobilePoint}) {
		width: ${munit(415)};
		height: ${munit(64)};
		border-radius: ${munit(3)};
		box-shadow: 0px 1px 13.5px 1.5px rgba(0, 0, 0, 0.2);
		padding: 0 ${munit(32)} 0 ${munit(15)};

		& > img {
			&:nth-child(1) {
				width: ${munit(66)};
				height: ${munit(48)};
			}

			&:nth-child(3) {
				width: ${munit(37)};
				height: ${munit(24)};
			}
		}
		& > p {
			font-size: ${munit(36)};
			padding-left: ${munit(27)};
		}
	}
`;

export const InputP = styled.div`
	font-size: ${unit(32)};
	padding-left: ${unit(24)};
	color: #fff;

	@media screen and (max-width: ${mobilePoint}) {
		font-size: ${munit(42)};
		padding-left: ${munit(30)};
	}
`;
