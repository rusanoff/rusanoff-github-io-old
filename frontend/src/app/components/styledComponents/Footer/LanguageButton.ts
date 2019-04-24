import styled from 'styled-components';

export const LanguageButton = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  border: 2px solid #fafafa;
  color: #fafafa;
  text-align: center;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-transform: uppercase;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: #ffdb4d;
    color: #262626;
    border-color: #ffdb4d;
  }
`;
