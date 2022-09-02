import React, { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

interface GuardRouteProps {
	component: any;
	path: string;
	exact: boolean;
}

const UnguardRoute: FC<GuardRouteProps> = ({ component, path, exact }) => {
	const {
		user: { logged },
	} = useSelector((state: RootStateOrAny) => state);
	return !logged ? <Route path={path} exact={exact} component={component} /> : <Redirect to="/home" />;
};

export default UnguardRoute;
