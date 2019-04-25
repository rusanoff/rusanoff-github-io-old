import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {COLORS, FONT_SIZES} from 'constants/styles';

const Logo = styled(Link)`
  display: flex;
  height: 50px;
  line-height: 50px;
  font-size: ${FONT_SIZES.XXXL};
  color: ${COLORS.WHITE};
  font-weight: 400;
  text-transform: uppercase;
  margin-right: 40px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const LogoImage = styled.div`
  width: 50px;
  height: 50px;
  background: ${COLORS.WHITE} center center no-repeat;
  background-size: cover;
  margin-right: 20px;
`;

export {
  Logo,
  LogoImage,
};
