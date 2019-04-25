import styled from 'styled-components';
import {COLORS} from 'constants/styles';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.BLACK};
  width: 100%;
  min-height: 100vh;
  padding: 40px 50px;
`;
