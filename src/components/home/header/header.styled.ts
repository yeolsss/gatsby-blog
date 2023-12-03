import { Link } from "gatsby";
import styled from "styled-components";

export const HomeHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const HomeHeaderTitle = styled.h1`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.09px;
  color: var(--accentColor);
  opacity: 0.9;
`;

export const HomeHeaderSubLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--textColor);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 23.8px;
  letter-spacing: 0.07px;
`;
