import styled from 'styled-components';

const Info = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h2`
  color: #fafafa;
  font-size: 32px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const InfoParagraph = styled.p`
  color: #999;
  font-size: 24px;
`;

export {
  Info,
  InfoTitle,
  InfoParagraph,
};
