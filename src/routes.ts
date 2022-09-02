import Home from '@pages/Home';

export const rootRouter = [
	{
		path: '/home',
		component: Home,
		exact: true,
		guard: false,
	},
];
