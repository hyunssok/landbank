import React, { FC } from 'react';
import * as S from './styled';
import Image from '@components/Image';

const IMG_YOUTUBE = 'youtube.png';
const ICON_YOUTUBE = 'icon_youtube.png';
const ICON_ARROW = 'icon_arrow.png';

const SubTwo: FC = () => {
	return(
    <S.Container>
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
			<S.SearchBox>
				<S.InputBox>
					<Image src={ICON_YOUTUBE} />
					<p>토지뱅크</p>
					<Image src={ICON_ARROW} />
				</S.InputBox>
				<S.InputP>검색</S.InputP>
			</S.SearchBox>
		</S.Container>
	);
};

export default SubTwo;
