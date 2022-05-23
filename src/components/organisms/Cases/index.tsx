import { AsideStyled, ContainerStyled, ContentStyled, DivStyled, ParagraphStyled, PhraseStyled, TitleStyled} from "./styled";
import CaseList from "../../molecules/CaseList";
import React from "react";
import i18next from 'i18next';

const Cases = () => {
  const  {t}  = i18next;
  const memoriesUpHover = [
    "./images/memories-up-1.jpg", 
    "./images/memories-up-2.jpg", 
    "./images/memories-up-3.jpg", 
    "./images/memories-up-4.jpg"
  ];
  const maisAcessoHover = [
    "./images/mais-acesso-1.jpg", 
    "./images/mais-acesso-2.jpg", 
    "./images/mais-acesso-3.jpg", 
    "./images/mais-acesso-4.jpg"
  ];
  const toParadoHover = [
    "./images/to-parado-1.jpg", 
    "./images/to-parado-2.jpg", 
    "./images/to-parado-3.jpg", 
    "./images/to-parado-4.jpg"
  ];

  const cases = [
    { 
      number: "01", 
      title: "Memories Up", 
      info: t('cases.weHelped'), 
      image: "./images/capa-memories-up.jpg", 
      alt: t('cases.alt.coverMemoriesUp'), 
      link: "#1", 
      hover: memoriesUpHover 
    },
    {   
      number: "02", 
      title: "Mais Acesso", 
      info: t('cases.webApp'), 
      image: "./images/capa-mais-acesso.jpg", 
      alt: t('cases.alt.coverMoreAccess'), 
      link: "#2", 
      hover: maisAcessoHover 
    },
    { 
      number: "03", 
      title: "Tô Parado", 
      info: t('cases.providers'), 
      image: "./images/capa-to-parado.jpg", 
      alt: t('cases.alt.ImStopped'), 
      link: "#3", 
      hover: toParadoHover 
    },
  ];

  return (
    <ContainerStyled id="cases">
      <ContentStyled>
        <DivStyled>
          <TitleStyled>{t('cases.ourCases')}</TitleStyled>
          <AsideStyled>
            <ParagraphStyled>&lt;LA CREAM&gt;</ParagraphStyled>
          </AsideStyled>
        </DivStyled>
        <PhraseStyled>{t('cases.weDoWell')}</PhraseStyled>
        <CaseList cases={cases} />
      </ContentStyled>
    </ContainerStyled>
  );
};
export default Cases;