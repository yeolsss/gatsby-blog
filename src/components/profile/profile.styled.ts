import styled from "styled-components";

export const ProfileWrapper = styled.section`
  max-width: 70rem;
  margin: 3.6rem auto 1.6rem;
  width: 100vw;
  height: auto;
  background-color: var(--backgroundColor3);
  border-radius: 1.6rem;
  color: var(--textColor);
  transition: background-color var(--transition-second);
  // tablet
  @media (max-width: 74rem) {
    padding: 0.8rem 1.6rem;
    max-width: 52rem;
  }

  > div {
    padding: 1rem 2.1rem;
    display: flex;

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
      flex: 2;
    }
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: 45rem;
  // tablet
  @media (max-width: 74rem) {
    max-width: 28rem;
  }
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

export const ProfileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 49rem;
  height: auto;
  margin: 0 auto;
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
