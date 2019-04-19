import 'assets/scss/index.scss';

import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {routes} from './Router';

export class App extends Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    );
  }
}
