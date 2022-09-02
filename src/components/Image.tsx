import React, { VFC } from 'react';
import { IMG_URI } from '@shared/utils/base';

interface Props {
	id?: string;
	alt?: string;
	className?: string;
	src: string;
	onClick?: any;
}

const Image: VFC<Props> = ({ id, src, onClick, className, alt = '' }) => {
	return <img id={id} className={className} onClick={onClick} src={`${IMG_URI}/${src}`} alt={alt} />;
};

export default Image;
