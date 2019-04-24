import styled from 'styled-components';
import {INavBurgerItemProps} from 'types/index';
import {NavLink} from 'react-router-dom';

const NavBarList = styled.ul<INavBurgerItemProps>`
  list-style: none;
  display: flex;
  align-items: center;
  height: 50px;
  pointer-events: ${(props) => {
    return props.open ? 'auto' : 'none';
  }};
  opacity: ${(props) => {
    return props.open ? '1' : '0';
  }};
  transform: ${(props) => {
    return props.open ? 'translateX(0)' : 'translateX(60px)';
  }};
  transition: .2s ease-out;
`;

const NavBarListItem = styled.li`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

const NavBarListItemLink = styled(NavLink)`
  display: block;
  position: relative;
  height: 30px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  overflow: hidden;
  backface-visibility: hidden;

  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #ffdb4d;
    position: absolute;
    transform: translateX(-110%);
    top: 28px;
    left: 0;
    transition: transform .2s;
  }

  :hover {
    text-decoration: none;
    color: #ffdb4d;

    &::after {
      transform: translateX(0);
    }
  }

  &.active {
    color: #ffdb4d;
    border-bottom: 2px solid #ffdb4d;
  }
`;

export {
  NavBarList,
  NavBarListItem,
  NavBarListItemLink,
};
