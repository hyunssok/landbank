import styled from "@emotion/styled";
import { unit } from '@shared/utils/base';

export const Container = styled.footer`
  min-height: ${unit(46)};
  padding: ${unit(27)} 0 ${unit(23)} 0;
  width: 100%;
  background-color: #600808;
  box-sizing: unset;
`;

export const CompanyUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompanyLi = styled.li`
  display: flex;
  color: #e6e6e6;
  font-family: NotoSansCJKkr;
  font-size: ${unit(16)};
  font-weight: 300;
  line-height: 1.75;
  
  &:nth-child(1){
    p{
      margin-right: ${unit(10)};
      padding-right: ${unit(10)};
      position: relative;

      &::after{
        content: '';
        width: ${unit(1)};
        height: ${unit(12)};
        background-color: #e6e6e6;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
      }

      &:nth-child(4){
        &::after{
          content: unset;
        }
      }
    }
  }
`;