import { INFO, INFO2 } from '@shared/constants';
import { useWindowSize } from '@shared/hooks';
import { info } from '@shared/props';
import { point } from '@styles/globalStyles';
import React, { FC } from 'react';
import * as S from './styled';

const Info: FC = () => {
	const { width } = useWindowSize();
	const mobilePoint = width <= point;

	return (
		<S.Container>
			{mobilePoint ? (
				<S.InfoTitle>{`평당 30만원 땅, 120만원으로\n바꾸는 방법 알려드립니다!`}</S.InfoTitle>
			) : (
				<S.InfoTitle>평당 30만원 땅, 120만원으로 바꾸는 방법 알려드립니다!</S.InfoTitle>
			)}
			<S.InfoUl>
				<S.InfoLi>
					<S.InfoP>{`굿옥션\n경매학원`}</S.InfoP>
				</S.InfoLi>
				<S.InfoLi>
					<S.InfoP>{`굿옥션\n부동산 컨설팅`}</S.InfoP>
				</S.InfoLi>
				<S.InfoLi>
					<S.InfoP>{`굿옥션\n부동산중개`}</S.InfoP>
				</S.InfoLi>
				<S.InfoLi>
					<S.InfoP>{`굿옥션\nNPL대부`}</S.InfoP>
				</S.InfoLi>
			</S.InfoUl>
			<S.CheckUl>
				{mobilePoint ? (
					<>
						{INFO2.map((item) => (
							<S.CheckLi key={item.id}>
								<span>{item.label}</span>
								<p>{item.content}</p>
							</S.CheckLi>
						))}
					</>
				) : (
					<>
						{INFO.map((item: info) => (
							<S.CheckLi key={item.id}>
								<span>{item.label}</span>
								<p>{item.content}</p>
							</S.CheckLi>
						))}
					</>
				)}
			</S.CheckUl>
			{mobilePoint ? (
				<S.Checkmark>{`내 토지분석 / 맹지 탈출 / 인허가 /\n안성토지 전문 / 급매(반값) / 3억 물건`}</S.Checkmark>
			) : (
				<S.Checkmark>내 토지분석, 맹지 탈출, 인허가, 안성토지 전문, 급매(반값), 3억 물건</S.Checkmark>
			)}
		</S.Container>
	);
};

export default Info;
