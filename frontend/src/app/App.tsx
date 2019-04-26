import 'assets/scss/index.scss';

import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {routes} from './Router';
import {Layout} from 'components/Layout';

export class App extends Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}
