import styled from "styled-components";
import { mediaQuery } from "../../shared/style/media/container.media";

export const ProfileWrapper = styled.section`
  margin: 3.6rem auto 1.6rem;
  width: 100%;
  height: auto;
  border-radius: 1.6rem;
  color: var(--textColor);
  transition: background-color var(--transition-second);
  z-index: 2;
  position: relative;
`;
export const ProfileContent = styled.div<{
  $profileState: string;
}>`
  padding: 1rem 2.1rem;
  width: ${({ $profileState }) => ($profileState === "open" ? "100%" : "20%")};
  display: flex;
  justify-content: ${({ $profileState }) =>
    $profileState === "open" ? "space-between" : "normal"};
  transition:
    justify-content var(--transition-second),
    width var(--transition-second);

  // text
  & h2 {
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23.8px; /* 170% */
    letter-spacing: 0.07px;
    color: var(--textColor);
    opacity: 0.75;
    transition: color var(--transition-second);
  }

  & h1 {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 28.8px; /* 120% */
    letter-spacing: 0.06px;
    color: var(--textColor);
    transition: color var(--transition-second);
    opacity: 0.9;
  }

  > div:nth-child(2) {
    flex: ${({ $profileState }) => ($profileState === "open" ? "2" : "0")};
  }
`;
export const VisibleProfileWrapper = styled.div<{
  $profileState: string;
}>`
  width: ${({ $profileState }) => ($profileState === "open" ? "100%" : "0")};
  height: ${({ $profileState }) =>
    $profileState === "open" ? "calc(100% + 1.5rem)" : "0"};
  background-color: var(--backgroundColor3);
  border-radius: 1.6rem;
  color: var(--textColor);
  transition:
    background-color var(--transition-second),
    width var(--transition-second),
    height var(--transition-second);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const ProfileInformation = styled.div<{
  $profileState: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 45rem;
  padding: ${({ $profileState }) =>
    $profileState === "open" ? "1rem 2.1rem" : "0"};
  width: ${({ $profileState }) => ($profileState === "open" ? "100%" : "0")};
  height: ${({ $profileState }) => ($profileState === "open" ? "auto" : "0")};
  opacity: ${({ $profileState }) => ($profileState === "open" ? "1" : "0")};
  transition:
    opacity 0.1s ease-in,
    width var(--transition-second),
    height var(--transition-second),
    padding var(--transition-second);
  overflow: hidden;

  ${mediaQuery(
    "tablet",
    `
    max-width: 28rem;
  `
  )}
`;

export const ProfileInformationNameTag = styled.div`
  display: flex;
  gap: 0.8rem;

  > a > svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--textColor);
    transition: color var(--transition-second);
  }
`;

export const ProfileDescription = styled.div`
  > p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23.8px; /* 170% */
    letter-spacing: 0.07px;
    color: var(--textColor);
    transition: color var(--transition-second);
    opacity: 0.75;
  }
`;

export const ProfileDescriptionWrapper = styled.div<{
  $profileState: string;
}>`
  padding: ${({ $profileState }) =>
    $profileState === "open" ? "1rem 2.1rem" : "0"};
  width: ${({ $profileState }) => ($profileState === "open" ? "auto" : "0")};
  height: ${({ $profileState }) => ($profileState === "open" ? "auto" : "0")};
  opacity: ${({ $profileState }) => ($profileState === "open" ? "1" : "0")};
  transition:
    opacity var(--transition-second),
    width var(--transition-second),
    height var(--transition-second),
    padding var(--transition-second);
  overflow: hidden;
`;

export const ProfileSkill = styled.div`
  margin-top: 1.5rem;
  > span {
    margin-top: 1rem;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 23.8px;
    letter-spacing: 0.06px;
    color: var(--textColor);
    transition: color var(--transition-second);
    opacity: 0.9;
  }
`;
