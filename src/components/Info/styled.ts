import styled from "@emotion/styled";
import { IMG_URI, unit } from '@shared/utils/base';
import { backgroundImageCover } from "@styles/globalStyles";

const ICON_CHECK = `${IMG_URI}/icon_check.png`;
const INFO_BG = `${IMG_URI}/infobg.png`;

export const Container = styled.section`
  ${backgroundImageCover};
  background-image: url(${INFO_BG});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: NotoSansCJKkr;
  width: 100%;
  height: 100vh;
  padding: ${unit(139)} 0 ${unit(150)};
`;

export const InfoTitle = styled.p`
  font-size: ${unit(43)};
  margin-bottom: ${unit(69)};
  font-weight: bold;
  color: #fff;
`;

export const InfoUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${unit(120)};
`;

export const InfoLi = styled.li`
  border-radius: 50%;
  padding: ${unit(18)};
  border: solid ${unit(3)} #fff;
  box-shadow: 0 0 9.9px 0.1px rgba(0, 0, 0, 0.6);
  margin-right: ${unit(55)};
  &:nth-child(4){
    margin-right: 0;
  }
`;

export const InfoP = styled.p`
  width: ${unit(203)};
	height: ${unit(202)};
  line-height: ${unit(45)};
  background-color: #c80000;
  border-radius: 50%;
  color: #fff;
  text-shadow: 0 0 9.9px rgba(0, 0, 0, 0.6);
  font-size: ${unit(30)};
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  width: ${unit(850)};
`;

export const CheckLi = styled.li`
  display: flex;
  align-items: center;
  width: calc(100% / 2);
  margin-bottom: ${unit(26)};

  &:nth-child(4){
    label{
      width: auto;
    }
  }
  &:last-child{
    margin-bottom: 0;
  }

  p{
    color: #ccc;
    font-size: ${unit(24)};
  }

  label{
    width: ${unit(120)};
    color: #fff;
    font-size: ${unit(30)};
    position: relative;
    padding-left: ${unit(20)};
    
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      ${backgroundImageCover}
      width: ${unit(37)};
      height: ${unit(37)};
      background-image: url(${ICON_CHECK});
    }
  }
`;

export const Checkmark = styled.p`
  margin-top: ${unit(57)};
  color: #ccc;
  font-size: ${unit(24)};
`;
