import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Column = styled.div`
  width: 400px;
  background: #000 radial-gradient(at 100% 10%, #262626, #000);
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -200px;
  height: 60vh;
  z-index: 0;
`;

export {
  Container,
  Column,
};
