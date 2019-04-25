import styled from 'styled-components';
import {COLORS, FONT_SIZES} from 'constants/styles';
import {IStyledLangChangerProps} from 'types/index';

export const StyledLangChanger = styled.div<IStyledLangChangerProps>`
  display: block;
  width: 36px;
  height: 36px;
  border: 2px solid ${({open}) => {
    return open ? COLORS.YELLOW : COLORS.WHITE;
  }};
  color: ${({open}) => {
    return open ? COLORS.BLACK : COLORS.WHITE;
  }};
  background-color: ${({open}) => {
    return open ? COLORS.YELLOW : 'transparent';
  }};
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
