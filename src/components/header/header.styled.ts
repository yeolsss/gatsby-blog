import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10.548rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2.1rem;
  box-sizing: border-box;
  margin: 3.165rem auto 0;
  @media (max-width: 74rem) {
    max-width: 70rem;
  }
`;
export const HeaderLogoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Logo = styled.h1`
  margin-top: 1rem;
  font-size: 6.329rem;
  font-weight: 700;
  height: 100%;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-style: normal;
  line-height: 9.4936rem; /* 150% */
  letter-spacing: -0.949px;
`;

export const HeaderNavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 2.1rem;
`;

export const HeaderNavListElement = styled.li<{
  $isCurrentPage: boolean;
}>`
  position: relative;
  height: 4.8rem;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${({ $isCurrentPage }) => ($isCurrentPage ? "100%" : "0%")};
    height: 0.5rem;
    background-color: var(--primaryColor);
    border-radius: 10px;
    transition: width 0.15s ease-in;
  }

  &:hover::before {
    width: 100%;
  }

  > a {
    font-family: var(--ibm-plex-sans-kr);
    font-size: 2.373rem;
    font-weight: 400;
    line-height: 4.7458rem;
    letter-spacing: 0.119px;
  }
`;
