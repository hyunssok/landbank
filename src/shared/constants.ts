import { info } from './props';

// Routes
export const PATHS = {
	HOME: `/`,
	SIGN_IN: '/signin',
};

export const API_PATHS = {
	REFRESH_TOKEN: '/refresh',
};

export const INFO: info[] = [
	{ id: 1, label: '시행', content: '토지 매입, 물류, 상업, 공장' },
	{ id: 2, label: '분양', content: '공장, 주택' },
	{ id: 3, label: '시공', content: '물류, 공장, 주택' },
	{ id: 4, label: '연 20% NPL 수익물건' },
	{ id: 5, label: '인허가', content: '물류, 공장, 주택' },
];

export const INFO2: info[] = [
	{ id: 1, label: '시행', content: '토지 매입, 물류, 상업, 공장' },
	{ id: 2, label: '시공', content: '물류, 공장, 주택' },
	{ id: 3, label: '인허가', content: '물류, 공장, 주택' },
	{ id: 4, label: '분양', content: '공장, 주택' },
	{ id: 5, label: '연 20% NPL 수익물건' },
];
