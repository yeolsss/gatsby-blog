import styled from "styled-components";
export const PostContentContainer = styled.div`
  > div {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.08px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.75;
  }
`;
