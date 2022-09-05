import styled from "@emotion/styled";
import { IMG_URI, unit } from "@shared/utils/base";
import { backgroundImageCover } from '@styles/globalStyles';

const IMG_MAINBG = `${IMG_URI}/mainbg.png` ;

export const Container = styled.section`
  ${backgroundImageCover}
  height: 100vh;
  background-image: url(${IMG_MAINBG});
`;

export const IconBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    width: ${unit(233)};
    height: ${unit(233)};
    border: solid ${unit(2.5)} #fff;
    background-color: #fff;
    border-radius: ${unit(20)};
    padding : ${unit(20)};
  }
`;

export const PhBox = styled.p`
  color: #fff;
  width: ${unit(282)};
  height: ${unit(40)};
  border-radius: ${unit(20)};
  border: solid ${unit(2.5)} #fff;
  background-image: linear-gradient(to top, #e9473c, #de5454);
  font-size: ${unit(32)};
  line-height: ${unit(40)};
  margin-top: ${unit(21)};
  text-align: center;
  font-family: NotoSansCJKkr;
`;