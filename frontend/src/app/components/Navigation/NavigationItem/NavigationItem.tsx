import React from 'react';
import {INavigationItem} from 'types/index';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavListItem = styled.li`
  font-size: 18px;

  :not(:last-child) {
    margin-right: 20px;
  }
`;

const NavListItemLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  :hover {
    text-decoration: none;
    color: #ccc;
  }
`;

export const NavigationItem: React.FunctionComponent<INavigationItem> = ({name, link}): JSX.Element => {
  return (
    <NavListItem>
      <NavListItemLink to={link}>{name}</NavListItemLink>
    </NavListItem>
  );
};
