import React, {useState} from 'react';

import {INavigationItem, INavigationProps} from 'types/index';

import {NavigationItem} from 'components/Navigation/NavigationItem';

import {NavBar, NavBarBurger, NavBarBurgerItem, NavBarList} from 'styledComponents/NavBar';

let Navigation: React.FunctionComponent<INavigationProps> = ({items}): JSX.Element => {
  const [open, toggleOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    toggleOpen(!open);
  };

  return (
    <NavBar>
      <NavBarList open={open}>
        {
          items.map(({name, link}: INavigationItem): JSX.Element => {
            return (
              <NavigationItem key={name} name={name} link={link}/>
            );
          })
        }
      </NavBarList>
      <NavBarBurger onClick={handleClick}>
        <NavBarBurgerItem key={1} open={open}/>
        <NavBarBurgerItem key={2} open={open} />
        <NavBarBurgerItem key={3} open={open} />
      </NavBarBurger>
    </NavBar>
  );
};

Navigation = React.memo(Navigation);

export {Navigation};
