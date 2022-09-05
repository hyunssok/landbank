import React, { FC } from "react";
import * as S from './styled';

const Footer: FC = () => {
  return (
    <S.Container>
      <S.CompanyUl>
        <S.CompanyLi>
          <p>경기도 안성시 보개면 종합운동장로 215, 나동</p>
          <p>대표 정대웅</p>
          <p>문의전화 031-675-6111</p>
          <p>문의문자 010-9793-1000</p>
        </S.CompanyLi>
        <S.CompanyLi>
          <p>Copyright © 토지뱅크 All Rights Reserved.</p>
        </S.CompanyLi>
      </S.CompanyUl>
    </S.Container>
  );
};

export default Footer;