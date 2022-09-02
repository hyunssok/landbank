import styled from '@emotion/styled';
import React, { FC, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { mobilePoint } from '@styles/globalStyles';
import { useWindowSize } from '@shared/hooks';
import { PrefixOfEmotion } from '@typings/base';
import { rootRouter } from './routes';
import GuardRoute from '@shared/guards/GuardRoute';

// IOS 창 사이즈 고정
const useInitDeviceHeight = () => {
	const { height } = useWindowSize();

	useEffect(() => {
		if (height) {
			const vh = height * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}
	}, [height]);
};

const App: FC = () => {
	useInitDeviceHeight();
	return (
		<S.Container>
			<Switch>
				{rootRouter.map(({ path, component, exact, guard }) =>
					guard ? (
						<GuardRoute key={path} path={path} component={component} exact={exact} />
					) : (
						<Route key={path} path={path} component={component} exact={exact} />
					),
				)}
				<Redirect to="/home" />
			</Switch>
		</S.Container>
	);
};

const S: PrefixOfEmotion = {};
S.Container = styled.div`
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	overflow-x: hidden;

	@media screen and (max-width: ${mobilePoint}) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100vw;
	}
`;

export default App;
