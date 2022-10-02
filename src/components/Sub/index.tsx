import Image from '@components/Image';
import React, { FC } from 'react';
import * as S from './styled';
import SearchBox from './searchBox/index';
import { point } from '@styles/globalStyles';
import { useWindowSize } from '@shared/hooks';

const IMG_YOUTUBE = 'youtube.png';

const Sub: FC = () => {
	const { width } = useWindowSize();
	const mobilePoint = width <= point;
	return (
		<S.Container>
			{mobilePoint ? (
				<>
					<S.BgFigure />
					<SearchBox />
					<S.VideoBox>
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
					</S.VideoBox>
					<S.BgFigure />
				</>
			) : (
				<>
					<S.BgFigure />
					<S.VideoBox>
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
						<Image src={IMG_YOUTUBE} />
					</S.VideoBox>
					<SearchBox />
				</>
			)}
		</S.Container>
	);
};

export default Sub;
