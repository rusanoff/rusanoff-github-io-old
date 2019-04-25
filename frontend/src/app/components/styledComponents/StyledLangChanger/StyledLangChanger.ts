import styled from 'styled-components';
import {COLORS, FONT_SIZES} from 'constants/styles';

export const StyledLangChanger = styled.div`
  display: block;
  width: 36px;
  height: 36px;
  border: 2px solid ${COLORS.WHITE};
  color: ${COLORS.WHITE};
  text-align: center;
  font-size: ${FONT_SIZES.LG};
  line-height: 32px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: ${COLORS.YELLOW};
    color: ${COLORS.BLACK};
    border-color: ${COLORS.YELLOW};
  }
`;
