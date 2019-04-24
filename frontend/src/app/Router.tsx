import React from 'react';
import {RouteProps} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {MainScreen} from 'components/MainScreen';

const routeConfig: RouteProps[] = [
  {
    path: '/',
    component: MainScreen,
    exact: true,
  },
  {
    path: '/about',
    component: MainScreen,
    exact: true,
  },
  {
    path: '/portfolio',
    component: MainScreen,
    exact: true,
  },
  {
    path: '/art',
    component: MainScreen,
    exact: true,
  },
  {
    path: '/contacts',
    component: MainScreen,
    exact: true,
  },
];

export const routes: JSX.Element = (
  <Switch>
    {
      routeConfig.map((routeProps: RouteProps, i: number) => {
        return (
          <Route key={i} {...routeProps} />
        );
      })
    }
  </Switch>
);
