import { Link } from "gatsby";
import styled from "styled-components";

export const CategoryWrapper = styled.div`
  padding: 16px;
  margin: 16px auto;
  max-width: 70rem;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.07px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.6rem;
`;

export const CategoryLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 0.5rem;
  > span {
    opacity: 0.75;
    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }
  }
`;

export const dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--textColor);
  border-radius: 50%;
`;
