import styled from 'styled-components';
import {INavBurgerItemProps} from 'types/index';

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
  background-color: #fafafa;
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
    transform: ${(props) => {
  return props.open ? 'translateX(-50px)' : 'translateX(0)';
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

export {
  NavBarBurger,
  NavBarBurgerItem,
};
