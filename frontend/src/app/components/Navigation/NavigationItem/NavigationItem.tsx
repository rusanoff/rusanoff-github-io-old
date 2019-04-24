import React from 'react';

import {INavigationItem} from 'types/index';

import {NavBarListItem, NavBarListItemLink} from 'styledComponents/NavBar';

export const NavigationItem: React.FunctionComponent<INavigationItem> = ({name, link}): JSX.Element => {
  return (
    <NavBarListItem>
      <NavBarListItemLink to={link} exact>{name}</NavBarListItemLink>
    </NavBarListItem>
  );
};
