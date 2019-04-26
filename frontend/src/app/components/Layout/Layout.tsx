import React from 'react';

import {ScreenWrapper, Wrapper} from 'styledComponents/Wrapper';
import {Column, Container} from 'styledComponents/Container';
import {Header} from 'components/Layout/Header';
import {Footer} from 'components/Layout/Footer';

export const Layout: React.FunctionComponent = ({children}): JSX.Element => {
  return (
    <Wrapper>
      <Column/>
      <ScreenWrapper>
        <Header/>
        <Container>
          <div>
            {children}
          </div>
          {/*<Scroll></Scroll>*/}
        </Container>
        <Footer/>
      </ScreenWrapper>
    </Wrapper>
  );
};
