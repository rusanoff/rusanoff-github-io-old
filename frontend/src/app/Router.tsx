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
];

export const routes: JSX.Element = (
  <Switch>
    {
      routeConfig.map((routeProps: RouteProps) => {
        return (
          <Route {...routeProps} />
        );
      })
    }
  </Switch>
);
