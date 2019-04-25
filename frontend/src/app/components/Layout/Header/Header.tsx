import React from 'react';

import {INavigationItem} from 'types/index';

import {Navigation} from 'components/Navigation';

import {StyledHeader} from 'styledComponents/StyledHeader';
import {Logo, LogoImage} from 'styledComponents/Logo';

const menuItems: INavigationItem[] = [
  {
    name: 'Главная',
    link: '/',
  },
  {
    name: 'Обо мне',
    link: '/about',
  },
  {
    name: 'Портфолио',
    link: '/portfolio',
  },
  {
    name: 'Искусство CSS',
    link: '/art',
  },
  {
    name: 'Контакты',
    link: '/contacts',
  },
];

export const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledHeader>
      <Logo to="/">
        <LogoImage/>
        Rusanoff
      </Logo>
      <Navigation items={menuItems}/>
    </StyledHeader>
  );
};
