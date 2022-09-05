import styled from "@emotion/styled";
import { IMG_URI, unit } from "@shared/utils/base";
import { backgroundImageCover } from "@styles/globalStyles";

const INFOTWO_BG = `${IMG_URI}/infotwobg.png`;

export const Container = styled.section`
  ${backgroundImageCover};
  background-image: url(${INFOTWO_BG});
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-family: NotoSansCJKkr;
  height: 100vh;
`;

export const Infoinner = styled.div`
  margin: 0 auto;
`;

export const InfoTitle = styled.label`
  font-size: ${unit(40)};
`;

export const InfoBox = styled.div`
  margin-top: ${unit(46)};
  display: flex;
  align-items: center;
`;

export const AskUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const AskLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:nth-child(1){
    margin-bottom: ${unit(45)};
  }
`;

export const AskP = styled.p`
  font-size: ${unit(22)};
  width: ${unit(143)};
  height: ${unit(33)};
  border-radius: ${unit(15)};
  margin-bottom: ${unit(15)};
  line-height: ${unit(32)};
  background-color: #fff;
  color: #640000;
  text-align: center;
`;

export const AskB = styled.b`
  font-size: ${unit(55)};
`;

export const InvestmentBox = styled.div``;

export const InvestmentTop = styled.div``;

export const InvestmentBottom = styled.div``;

export const InvestmentItem = styled.div``;