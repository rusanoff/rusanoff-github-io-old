import React from 'react';

import {Header} from 'components/Layout/Header';
import {Footer} from 'components/Layout/Footer';

import {Wrapper} from 'styledComponents/Wrapper';
import {Container} from 'styledComponents/Container';

export const Layout: React.FunctionComponent = ({children}): JSX.Element => {
  return (
    <Wrapper>
      <Header/>
      <Container>
        <div>
          {children}
        </div>
        {/*<Scroll></Scroll>*/}
      </Container>
      <Footer/>
    </Wrapper>
  );
};
