import styled from 'styled-components';
import {COLORS, FONT_SIZES} from 'constants/styles';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
`;

const Info = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h2`
  color: ${COLORS.WHITE};
  font-size: ${FONT_SIZES.XXL};
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const InfoParagraph = styled.p`
  color: ${COLORS.GREY};
  font-size: ${FONT_SIZES.XL};
`;

export {
  StyledFooter,
  Info,
  InfoTitle,
  InfoParagraph,
};
