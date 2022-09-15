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
  width: 100%;
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

export const InvestmentBox = styled.div`
  width: ${unit(430)};
  margin-left: ${unit(180)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InvestmentTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InvestmentBottom = styled.div`
  width: 100%;
  margin-top: ${unit(34)};

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const InvestmentItem = styled.div`
  width: ${unit(202)};
  height: ${unit(128)};
  border-radius: ${unit(30)};
  font-size: ${unit(30)};
  text-align: center;
  color: #fff;
  box-shadow: 0 0 9.9px 0.1px rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(to top, #600808, #c80000);
  display: flex;
  align-items: center;
  cursor: pointer;
`;