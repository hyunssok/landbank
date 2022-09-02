import { useEffect } from 'react';

interface IUseScrollTop {
	pathname?: string;
	page?: string | number;
	ref: React.RefObject<any>;
}

const useScrollTop = ({ ref, page, pathname }: IUseScrollTop): void => {
	useEffect(() => {
		if (ref.current) ref.current.scrollIntoView();
	}, [ref.current]);

	useEffect(() => {
		if (ref.current) ref.current.scrollIntoView();
	}, [page, ref.current]);

	useEffect(() => {
		if (ref.current) ref.current.scrollIntoView();
	}, [pathname, ref.current]);
};

export default useScrollTop;
