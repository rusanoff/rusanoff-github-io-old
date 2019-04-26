import styled from 'styled-components';
import {COLORS} from 'constants/styles';

const Wrapper = styled.section`
  background: ${COLORS.BLACK} radial-gradient(circle closest-corner at 70% 10%, #444, #111);
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const ScreenWrapper = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export {
  Wrapper,
  ScreenWrapper,
};
