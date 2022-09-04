const fullWidth = 1920;
const mobileFullWidth = 720;
const mobileFullHeight = 1624;

export const IMG_URI = '/assets/images';
export const MEDIA_URI = '/assets/media';
export const FONT_URI = '/assets/fonts';

export const unit = (size: number, float = 2): string => {
	// const ratio = Math.round((size / fullWidth) * 100 * 100) / 100;
	const ratio = ((size / fullWidth) * 100).toFixed(float);
	return `${ratio}vw`;
};

export const munit = (size: number, float = 2): string => {
	const ratio = ((size / mobileFullWidth) * 100).toFixed(float);
	return `${ratio}vw`;
};

export const mvh = (size: number): string => {
	const ratio = ((size / mobileFullHeight) * 100).toFixed(2);
	return `${ratio}vh`;
};

export const REGEX = {
	emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	passwordRegex: /^[a-zA-Z0-9\\!@#$%^&*()]*$/,
	engRegex: /^[a-zA-Z0-9]*$/,
	engNumberRegex: /^[a-zA-Z0-9]*$/,
	usernameRegex: /^[a-zA-Z0-9]*$/,
	numberRegex: /^[0-9]*$/,
	rddRegex: /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}/,
	foreignRddRegex: /^(\d{6})-?([5-8]\d{1}\d{5})$/,
	onlyNumRegex: /\D/,
	onlyEngRegex: /[^a-z|A-Z]/,
	onlyKorRegex: /[^ㄱ-ㅎ|가-힣]/,
	mobileRegex: /^(01([0|1|6|7|8|9]))-?([0-9]{3,4})-?([0-9]{4})$/,
	mobileSplitRegex: /(\d{3})(\d{3,4})(\d{4})/g,
	rddFrontPointRegex: /(\d{2})(\d{2})(\d{2})/g,
};

export const forceEnterNumber = (str: string): string => {
	return str.replace(/[^0-9]/g, '');
};

export const yieldFor = (ms: number): Promise<string> => {
	return new Promise((resolve) => setTimeout(() => resolve('ok'), ms));
};

// condition 이 true이면 작업을 멈춤 (sync함수 여야함)
export const waitFor = (tryCount: number, condition: () => boolean, sleepMs = 100): Promise<number | 'timeout'> => {
	return new Promise((resolve) => {
		function doRetry(innerRetry: number) {
			// console.log('innerRetry', innerRetry, condition());
			if (condition()) resolve(innerRetry);
			else if (innerRetry > 0) setTimeout(() => doRetry(innerRetry - 1), sleepMs);
			else resolve('timeout');
		}
		doRetry(tryCount);
	});
};

export const isIphoneOrPad = (): boolean => {
	const varUA = navigator.userAgent.toLowerCase();
	return varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1;
};

export const isEmpty = (target: any) => {
	const type = Object.prototype.toString.call(target).slice(8, -1);
	if (type === 'Object' && Object.keys(target).length === 0) return true;
	if (type === 'Number' && target === 0) return true;
	try {
		const { length } = target;
		if (length === 0) return true;
		return false;
	} catch {
		return true;
	}
};

export const comma = (num: number | string): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
