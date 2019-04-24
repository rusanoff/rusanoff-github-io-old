import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Logo = styled(Link)`
  display: flex;
  height: 50px;
  line-height: 50px;
  font-size: 44px;
  color: #fafafa;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 40px;
  text-decoration: none;

  :hover {
    text-decoration: none;
  }
`;
