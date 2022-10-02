import Image from '@components/Image';
import React, { FC } from 'react';
import * as S from './styled';

const ICON_YOUTUBE = 'icon_youtube.png';
const ICON_ARROW = 'icon_arrow.png';

const SearchBox: FC = () => {
	return (
		<S.SearchBox>
			<S.InputBox>
				<Image src={ICON_YOUTUBE} />
				<p>토지뱅크</p>
				<Image src={ICON_ARROW} />
			</S.InputBox>
			<S.InputP>검색</S.InputP>
		</S.SearchBox>
	);
};

export default SearchBox;
