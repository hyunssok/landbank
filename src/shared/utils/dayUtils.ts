import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import _ from 'lodash';

dayjs.extend(utc);

export const getYmd = (target?: Date | string, format?: string): string => {
	if (_.isUndefined(target)) return dayjs().format(format ?? 'YYYY-MM-DD');
	return dayjs(target).format(format ?? 'YYYY-MM-DD');
};

export const getYmdHms = (target?: Date | string, format?: string): string => {
	if (_.isUndefined(target)) return dayjs().format(format ?? 'YYYY-MM-DD HH:mm:ss');
	return dayjs(target).format(format ?? 'YYYY-MM-DD HH:mm:ss');
};
