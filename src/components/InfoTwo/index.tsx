import React, { FC } from "react";
import { Link, Route } from "react-router-dom";
import * as S from './styled';


const InfoTwo : FC = () => {
  return(
    <S.Container>
      <S.Infoinner>
        <S.InfoTitle>실전투자반 모집</S.InfoTitle>
        <S.InfoBox>
          <S.AskUl>
            <S.AskLi>
              <S.AskP>문의 전화</S.AskP>
              <S.AskB>031-675-6111</S.AskB>
            </S.AskLi>
            <S.AskLi>
              <S.AskP>문의 문자</S.AskP>
              <S.AskB>010-9793-1000</S.AskB>
            </S.AskLi>
          </S.AskUl>
          <S.InvestmentBox>
            <S.InvestmentTop>
              <S.InvestmentItem>{`반값/급매\n물건접수`}</S.InvestmentItem>
              <S.InvestmentItem>{`반값/급매\n물건접수`}</S.InvestmentItem>
            </S.InvestmentTop>
            <S.InvestmentBottom>
              <S.InvestmentItem>{`실전투자반 무료상담 신청`}</S.InvestmentItem>
            </S.InvestmentBottom>
          </S.InvestmentBox>
        </S.InfoBox>
      </S.Infoinner>
    </S.Container>
  );
};

export default InfoTwo;