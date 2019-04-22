import React from 'react';
import styled from 'styled-components';
import {INavigationItem} from 'types/index';
import {Navigation} from 'components/Navigation';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #262626;
  width: 100%;
  min-height: 100vh;
  padding: 30px 50px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
`;

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
    link: 'art',
  },
  {
    name: 'Контакты',
    link: 'contacts',
  },
];

export const Layout: React.FunctionComponent = ({children}): JSX.Element => {
  return (
    <Wrapper>
      <Header>
        <Navigation items={menuItems}/>
      </Header>
      {children}
      <footer>

      </footer>
    </Wrapper>
  );
};
