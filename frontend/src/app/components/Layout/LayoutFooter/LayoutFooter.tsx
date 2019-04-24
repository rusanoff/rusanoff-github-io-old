import React from 'react';

import {Language} from 'components/Language';
import {Footer, Info, InfoParagraph, InfoTitle} from 'styledComponents/Footer';

export const LayoutFooter: React.FunctionComponent = (): JSX.Element => {
  return (
    <Footer>
      <Info>
        <InfoTitle>Андрей Русанов</InfoTitle>
        <InfoParagraph>Frontend | Full Stack разработчик</InfoParagraph>
      </Info>
      <Language lang="ru"/>
    </Footer>
  );
};
