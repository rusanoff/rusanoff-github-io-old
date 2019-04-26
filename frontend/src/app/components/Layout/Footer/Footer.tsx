import React from 'react';
import {StyledFooter} from 'styledComponents/StyledFooter';
import {Watermark, WatermarkParagraph, WatermarkTitle} from 'styledComponents/Watermark';
import {PageNumber} from 'styledComponents/PageNumber';

export const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledFooter>
      <Watermark>
        <WatermarkTitle>Андрей Русанов</WatermarkTitle>
        <WatermarkParagraph>Frontend | Full Stack разработчик</WatermarkParagraph>
      </Watermark>
      <PageNumber>
        01
      </PageNumber>
    </StyledFooter>
  );
};
