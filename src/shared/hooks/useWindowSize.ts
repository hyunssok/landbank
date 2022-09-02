import { point } from '@styles/globalStyles';
import { useLayoutEffect, useState } from 'react';
import useEventListener from './useEventListener';

interface IUseWindowSize {
	isMobile: boolean;
	width: number;
	height: number;
}

function useWindowSize(): IUseWindowSize {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);

	const handleSize = () => {
		if (width > 0) setIsMobile(width <= point);
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEventListener('resize', handleSize);

	// Set size at the first client-side load
	useLayoutEffect(() => {
		handleSize();
	}, []);

	useLayoutEffect(() => {
		if (width > 0) setIsMobile(width <= point);
	}, [width]);

	return {
		isMobile,
		width,
		height,
	};
}

export default useWindowSize;
