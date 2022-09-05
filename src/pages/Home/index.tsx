import { Info, InfoTwo, Main, Sub, SubTwo } from '@components/index';
import React, { FC } from 'react';
import * as S from './styled';

const Home: FC = () => {
	return(
    <S.Container>
			<Main />
			<Sub />
			<SubTwo />
			<Info />
			<InfoTwo />
		</S.Container>
	);
};

export default Home;
