import { css } from '@emotion/react';
import { IMG_URI, unit } from '@shared/utils/base';
import { globalFonts } from './globalFonts';

const globalStyles = css`
	${globalFonts}
	a,
	a:link,
	a:visited {
		text-decoration: none;
		color: #000;
	}
	html,
	body {
		overflow: initial !important;
		overflow-x: hidden;
	}
	body {
		-ms-overflow-style: none;
	}
	::-webkit-scrollbar {
		display: none;
	}
	*::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}
	* {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		box-sizing: border-box;
		font-family: 'Pretendard Variable';
		margin: 0;
		padding: 0;
		/* color: #111; */
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
	li {
		list-style: none;
	}

	button {
		user-select: none;
		color: black;
		&:focus {
			outline: none;
		}
		&:hover {
			cursor: pointer;
		}
	}
	*:focus {
		outline: none;
	}

	input {
		outline: none;
		-webkit-appearance: none;
		-webkit-border-radius: 0;
	}

	input,
	textarea {
		-webkit-appearance: none;
		-moz-user-select: auto !important;
		-webkit-user-select: auto !important;
		-ms-user-select: auto !important;
		user-select: auto !important;
		&::placeholder {
			color: #ccc;
		}
	}
	select {
		position: relative;
		background-image: url('${IMG_URI}/select_image.webp') !important;
		background-position: 96% center;
		background-repeat: no-repeat;
		background-color: #fff;
		padding-right: 20px !important;
		outline: none;
		-moz-appearance: none !important;
		appearance: none !important;
		-webkit-appearance: none !important;
		background-size: ${unit(20)} auto;
	}
	button:active {
		transform: scale(0.98);
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s;
		-webkit-text-fill-color: #333;
	}
`;

export default globalStyles;
