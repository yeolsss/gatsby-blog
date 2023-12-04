import styled from "styled-components";

export const PostContainer = styled.article`
  width: 100%;
  padding: 8px 16px;
  max-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 16px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 14.5rem;
  border-radius: 1.6rem;
  overflow: hidden;
`;
