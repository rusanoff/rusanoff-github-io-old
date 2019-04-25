import React from 'react';

import {ILanguageProps} from 'types/index';

import {StyledLangChanger} from 'styledComponents/StyledLangChanger';

export const LangChanger: React.FunctionComponent<ILanguageProps> = ({lang}): JSX.Element => {
  return (
    <StyledLangChanger>
      {lang}
    </StyledLangChanger>
  );
};
