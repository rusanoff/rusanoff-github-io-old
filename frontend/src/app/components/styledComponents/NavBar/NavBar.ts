import styled from 'styled-components';
import {INavBurgerItemProps} from 'types/index';
import {NavLink} from 'react-router-dom';
import {COLORS, FONT_SIZES} from 'constants/styles';

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
`;

const NavBarBurger = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .2s ease-in-out;
  position: relative;
`;

const NavBarBurgerItem = styled.div<INavBurgerItemProps>`
  position: absolute;
  width: 50px;
  height: 2px;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  background-color: ${COLORS.WHITE};
  transition: .2s ease-in-out;

  &:nth-child(1) {
    top: ${(props) => {
      return props.open ? '24px' : '10px';
    }};
    transform: ${(props) => {
      return props.open ? 'rotate(135deg)' : 'rotate(0deg)';
    }};
  }

  &:nth-child(2) {
    top: 24px;
    opacity: ${(props) => {
      return props.open ? '0' : '1';
    }};
    transform: ${(props) => {
      return props.open ? 'translateX(-50px)' : 'translateX(0)';
    }};
  }

  &:nth-child(3) {
    top: ${(props) => {
      return props.open ? '24px' : '38px';
    }};
    transform: ${(props) => {
      return props.open ? 'rotate(-135deg)' : 'rotate(0deg)';
    }};
  }
`;

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
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const NavBarListItemLink = styled(NavLink)`
  display: block;
  position: relative;
  height: 30px;
  text-decoration: none;
  color: ${COLORS.WHITE};
  text-transform: uppercase;
  font-size: ${FONT_SIZES.LG};
  overflow: hidden;
  backface-visibility: hidden;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.YELLOW};
    position: absolute;
    transform: translateX(-110%);
    top: 28px;
    left: 0;
    transition: transform .2s;
  }

  &:hover {
    text-decoration: none;
    color: ${COLORS.YELLOW};

    &::after {
      transform: translateX(0);
    }
  }

  &.active {
    color: ${COLORS.YELLOW};
    border-bottom: 2px solid ${COLORS.YELLOW};
  }
`;

export {
  NavBar,
  NavBarBurger,
  NavBarBurgerItem,
  NavBarList,
  NavBarListItem,
  NavBarListItemLink,
};
