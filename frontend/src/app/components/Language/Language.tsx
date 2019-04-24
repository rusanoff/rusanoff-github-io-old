import React from 'react';

import {ILanguageProps} from 'types/index';

import {LanguageButton} from 'styledComponents/Footer';

export const Language: React.FunctionComponent<ILanguageProps> = ({lang}): JSX.Element => {
  return (
    <LanguageButton>
      {lang}
    </LanguageButton>
  );
};
