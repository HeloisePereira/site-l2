import React from 'react';
import { SectionOutSourcingStyled, ParagraphOutSourcingStyled } from './styled';
import Marquee from 'react-fast-marquee';
import { useTranslations } from 'next-intl'

export default function OutSourcing() {
  const t = useTranslations('outSourcing')
  return (
    <SectionOutSourcingStyled>
      <Marquee gradientColor={[null,undefined,undefined]} direction='left' loop={0} speed={100}>
        <ParagraphOutSourcingStyled>
        ·  {t('outsourcing')} · {t('ideation')} · {t('design')} · {t('startupService')} · {t('consultingService')}  ·  {t('outsourcing')} · {t('ideation')} · {t('design')} · {t('startupService')} · {t('consultingService')} 
        </ParagraphOutSourcingStyled>
      </Marquee> 
    </SectionOutSourcingStyled>
  );
}
