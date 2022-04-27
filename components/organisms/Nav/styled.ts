import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const NavStyled = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 60;
  color: ${colors.black};
  background-color: ${colors.gray};
  &.white {
    background-color: transparent;
    color: white;
  }
  &.white p{
    color: white;
  }
`;

export const NavContentStyled = styled.ul`
  padding: 43px 32px 43px 28px;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

export const NavItemStyled = styled.li`
  list-style-type: none;
  font-family: 'Circular Air Pro';
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 10px;
    line-height: 14px;
  }
  img {
    @media (max-width: 500px) {
      width: 43px !important;
    }
  }
`;

export const NavButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    @media (max-width: 500px) {
      width: 20px !important;
    }
  }
`;
export const DivTextStyled = styled.div``;

export const TextMenuStyled = styled.p`
  font-family: 'Circular Air Pro';
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  padding-left: 8px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ImageStyled = styled.img``;