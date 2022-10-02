import Image from '@components/Image';
import { useWindowSize } from '@shared/hooks';
import { point } from '@styles/globalStyles';
import React, { FC } from 'react';
import * as S from './styled';

const IMG_MAINICON = `mainIcon.png`;
const Main: FC = () => {
	const { width } = useWindowSize();
	const mobilePoint = width <= point;

	return (
		<S.Container>
			{mobilePoint ? (
				<S.IconBox>
					<S.PhBox>010-9793-1000</S.PhBox>
					<Image src={IMG_MAINICON} />
				</S.IconBox>
			) : (
				<S.IconBox>
					<Image src={IMG_MAINICON} />
					<S.PhBox>010-9793-1000</S.PhBox>
				</S.IconBox>
			)}
		</S.Container>
	);
};

export default Main;
