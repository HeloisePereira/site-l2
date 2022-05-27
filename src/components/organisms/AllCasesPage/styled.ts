import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ContainerStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  // padding: 10rem 2.8rem 48rem;
  padding: 10rem 2.8rem 10rem;  

  // @media (min-width: 2560px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
  // }

  // @media (min-width: 1920px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 76%);
  // }

  // @media (max-width: 800px) {
  //   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 86%);
  // }

  // @media (max-width: 600px) {
  //   padding-right: 0px;
  // }
`;

export const ContentStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 3.6rem;
`;

export const AsideStyled = styled.aside`
  margin-bottom: -8px;
  margin-left: 25px;

  @media (max-width: 800px) {
    margin-left: 5px;
  }
  @media (min-width: 400px) {
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 19px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-size: 1.6rem;
  line-height: 22.4px;
  font-weight: 400;
  letter-spacing: -0.02em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }
`;

export const TitleStyled = styled.h2`
  font-family: 'Neue Machina', sans-serif;
  font-size: 6.4rem;
  line-height: 57.6px;
  font-weight: 800;
  width: 686px; 
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 930px) {
    width: 500px;
  }

  @media (max-width: 800px) {
    width: 278px;
    line-height: 28.8px;
  }

  @media (max-width: 415px) {
    width: 264px;
    line-height: 28.8px;
  }
`;

export const PhraseStyled = styled.p`
  font-family: 'Circular Air Pro', sans-serif;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.36rem;
  width: 502px;
  margin-bottom: 8rem;
  letter-spacing: -0.04em;

  ::selection {
    background: ${colors.purple};
    color: ${colors.gray};
  }

  @media (max-width: 800px) {
    width: 175px;
  }
`;

export const BlackLineStyled = styled.div`
  color: ${colors.gray};
  background-color: ${colors.black};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1456px) 1fr;
  padding: 0px 28px;
  overflow: hidden;
  @media(max-width: 800px){
    padding: 0px 12px;
  }
`;

export const HeaderStyled = styled.hgroup`
  max-width: 648px;
  z-index: 50;

  @media(max-width: 1000px){
    max-width: 400px;
  }


  @media(max-width: 800px){
    max-width: 264px;
  }


`;

export const SubtitleStyled = styled.h3`
  font-family: 'Circular Air Pro', sans-serif;
  max-width: 464px;
  font-style: normal;
  font-weight: 400;
  font-size: 2.4em;
  line-height: 140%;
  letter-spacing: -0.04em;
  ::selection {
    background: ${colors.purple};
  }

  @media(max-width: 800px){
    max-width: 160px;
  }
`;

export const CustomersContainer = styled.div`
  z-index: 5;  
  grid-column: 2;
`;
export const BlackBg = styled.div`
  height: 510px;
  width: 100%;
  right 0;
  background-color: ${colors.black};
  position: absolute;
`;
