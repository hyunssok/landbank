import styled from "@emotion/styled";
import { unit } from "@shared/utils/base";
import { IMG_URI } from '../../shared/utils/base';

export const Container = styled.section`
  padding : ${unit(81)} ${unit(341)} ${unit(68)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgFigure = styled.figure`
  /* background-image: ; */
`;

export const VideoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${unit(28)};
  
  img{
    width: ${unit(394)};
    height: ${unit(222)};
    opacity: 0.7;
  }
`;

export const SearchBox = styled.div`
  background-color: #ff0000;
  margin-top: ${unit(36)};
  width: ${unit(442)};
  height: ${unit(74)};
  padding: ${unit(10)};
  display: flex;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: ${unit(332)};
  height: ${unit(50)};
  border-radius: ${unit(3)};
  box-shadow: 0px 1px 13.5px 1.5px rgba(0, 0, 0, 0.2);
  padding: 0 ${unit(24)} 0 ${unit(12)};
  position: relative;

  & > img{
    &:nth-child(1){
      width: ${unit(51)};
      height: ${unit(38)};
    }

    &:nth-child(3){
      width: ${unit(29)};
      height: ${unit(18)};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);
    } 
  }

  & > p{
    font-size: ${unit(28)};
    color: #000;
    padding-left: ${unit(21)};
  }
`;

export const InputP = styled.div`
  font-size: ${unit(32)};
  padding-left: ${unit(24)};
  color: #fff;
`;
