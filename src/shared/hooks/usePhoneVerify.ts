import { useEffect, useRef, useState } from 'react';
// import { useDialog } from '@shared/hooks/useDialog';
import * as apiActions from '@shared/apis/apiActions';
import _ from 'lodash';

const LIMIT_TIME = 180;

export const usePhoneVerify = (): any => {
	const [remainTime, setRemainTime] = useState(-1);
	const [verifyCode, setVerifyCode] = useState('');
	const timer = useRef<any>(null);
	const correctCode = useRef<string | null>(null);
	// const dialog = useDialog();

	useEffect(() => {
		return () => {
			clearTimerInterval();
		};
	}, []);

	useEffect(() => {
		if (remainTime === -1) return;
		if (remainTime === 0) {
			correctCode.current = null;
			clearTimerInterval();
		}
	}, [remainTime]);

	const clearTimerInterval = () => {
		if (timer.current !== null) clearInterval(timer.current);
	};

	const resetTimer = () => {
		clearTimerInterval();
		setRemainTime(LIMIT_TIME);
		timer.current = setInterval(() => {
			setRemainTime((prev) => {
				if (prev > 0) return prev - 1;
				return prev;
			});
		}, 1000);
	};

	const requestVerifyCode = (phone: string) => {
		// if (phone.length < 10) dialog.alert('유효하지 않은 전화번호입니다.');
		// else {
		// 	correctCode.current = `${_.random(1000, 9999)}`;
		// 	const msg = `[인증번호: ${correctCode.current}] 협치마포 인증번호를 입력해주세요.`;
		// 	apiActions.sendSMS(phone, msg).then((res) => {
		// 		resetTimer();
		// 	});
		// }
	};

	return { remainTime, verifyCode, correctCode, requestVerifyCode, setVerifyCode };
};
