import styled from "styled-components";
import { mediaQuery } from "../style/media/container.media";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  // tablet
  ${mediaQuery(
    "tablet",
    `
    max-width: 52rem;
  `
  )}
`;
export const Main = styled.main`
  background-color: var(--backgroundColor3);
  padding: 16px 16px 50px;
  border-radius: 16px;
  width: 100%;
  height: auto;
  transition: background-color var(--transition-second);
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
