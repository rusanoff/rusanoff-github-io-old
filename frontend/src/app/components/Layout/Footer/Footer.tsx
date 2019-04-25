import React from 'react';

import {LangChanger} from 'components/LangChanger';
import {Info, InfoParagraph, InfoTitle, StyledFooter} from 'styledComponents/StyledFooter';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledFooter>
      <Info>
        <InfoTitle>Андрей Русанов</InfoTitle>
        <InfoParagraph>Frontend | Full Stack разработчик</InfoParagraph>
      </Info>
      <LangChanger lang="ru"/>
    </StyledFooter>
  );
};
