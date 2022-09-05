import Image from '@components/Image';
import React, { FC } from 'react';
import * as S from './styled';

const IMG_MAINICON = `mainIcon.png`;
const Main: FC = () => {
	return(
    <S.Container>
			<S.IconBox>
				<Image src={IMG_MAINICON}/>
				<S.PhBox>010-9793-1000</S.PhBox>
			</S.IconBox>
		</S.Container>
	);
};

export default Main;
