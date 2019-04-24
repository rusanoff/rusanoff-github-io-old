import React from 'react';

import {LayoutHeader} from 'components/Layout/LayoutHeader';
import {LayoutFooter} from 'components/Layout/LayoutFooter';

import {Wrapper} from 'styledComponents/Wrapper';
import {Container} from 'styledComponents/Container';

export const Layout: React.FunctionComponent = ({children}): JSX.Element => {
  return (
    <Wrapper>
      <LayoutHeader/>
      <Container>
        <div>
          {children}
        </div>
        {/*<Scroll></Scroll>*/}
      </Container>
      <LayoutFooter/>
    </Wrapper>
  );
};
