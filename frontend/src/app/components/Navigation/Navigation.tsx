import React, {useState} from 'react';
import {INavigationItem, INavigationProps} from 'types/index';
import {NavigationItem} from 'components/Navigation/NavigationItem';
import styled from 'styled-components';

interface INavBurgerItemProps {
  open: boolean;
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 50px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 50px;
`;

const NavBurger = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .2s ease-in-out;
  position: relative;
`;

const NavBurgerItem = styled.div<INavBurgerItemProps>`
  position: absolute;
  width: 50px;
  height: 2px;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  background-color: #fff;
  transition: .2s ease-in-out;

  :nth-child(1) {
    top: ${(props) => {
      return props.open ? '24px' : '10px';
    }};
    transform: ${(props) => {
      return props.open ? 'rotate(135deg)' : 'rotate(0deg)';
    }};
  }

  :nth-child(2) {
    top: 24px;
    opacity: ${(props) => {
      return props.open ? '0' : '1';
    }};
    left: ${(props) => {
      return props.open ? '50px' : '1';
    }};
  }

  :nth-child(3) {
    top: ${(props) => {
      return props.open ? '24px' : '38px';
    }};
    transform: ${(props) => {
      return props.open ? 'rotate(-135deg)' : 'rotate(0deg)';
    }};
  }
`;

export const Navigation: React.FunctionComponent<INavigationProps> = ({items}): JSX.Element => {
  const [open, toggleOpen] = useState(false);
  const handleClick = () => {
    toggleOpen(!open);
  };

  return (
    <Nav>
      <NavBurger onClick={handleClick}>
        <NavBurgerItem key={1} open={open}/>
        <NavBurgerItem key={2} open={open} />
        <NavBurgerItem key={3} open={open} />
      </NavBurger>
      <NavList>
        {
          items.map(({name, link}: INavigationItem): JSX.Element => {
            return (
              <NavigationItem key={name} name={name} link={link}/>
            );
          })
        }
      </NavList>
    </Nav>
  );
};
