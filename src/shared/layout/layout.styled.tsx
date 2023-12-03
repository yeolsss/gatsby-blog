import styled from "styled-components";
import { mediaQuery } from "../style/media/container.media";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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
export const Main = styled.main``;
