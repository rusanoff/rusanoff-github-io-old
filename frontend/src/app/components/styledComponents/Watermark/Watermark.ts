import styled from 'styled-components';
import {COLORS, FONT_SIZES} from 'constants/styles';

const Watermark = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100px;
`;

const WatermarkTitle = styled.h2`
  font-size: ${FONT_SIZES.XL};
  color: ${COLORS.WHITE};
  line-height: ${FONT_SIZES.XL};
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const WatermarkParagraph = styled.p`
  font-size: ${FONT_SIZES.LG};
  color: ${COLORS.GREY};
  line-height: ${FONT_SIZES.LG};
`;

export {
  Watermark,
  WatermarkTitle,
  WatermarkParagraph,
};
