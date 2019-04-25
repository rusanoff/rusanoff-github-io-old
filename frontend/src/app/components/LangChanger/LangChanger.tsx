import React, {useState} from 'react';

import {ILanguageProps} from 'types/index';

import {StyledLangChanger} from 'styledComponents/StyledLangChanger';

export const LangChanger: React.FunctionComponent<ILanguageProps> = ({lang}): JSX.Element => {
  const [open, toggleOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    toggleOpen(!open);
  };

  return (
    <StyledLangChanger onClick={handleClick} open={open}>
      {lang}
    </StyledLangChanger>
  );
};
