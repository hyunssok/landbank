import React, { FC } from 'react';
import { PATHS } from '@shared/constants';
import { Redirect, Route } from 'react-router';
import { COOKIE_KEYS, getCookie } from '@shared/utils/cookie';

interface GuardRouteProps {
	component: any;
	path: string;
	exact: boolean;
}

const GuardRoute: FC<GuardRouteProps> = ({ component, path, exact }) => {
	//! Refresh Token도 정책 따라 설정
	const logged = !!getCookie(COOKIE_KEYS.ACCESS_TOKEN);
	return logged ? <Route path={path} exact={exact} component={component} /> : <Redirect to={PATHS.SIGN_IN} />;
};

export default GuardRoute;
