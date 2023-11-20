import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 10.548rem;
  margin-top: 3.165rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2.1rem;
  box-sizing: border-box;
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
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-style: normal;
  line-height: 9.4936rem; /* 150% */
  letter-spacing: -0.949px;
`;

export const HeaderNav = styled.nav``;

export const HeaderNavList = styled.ul`
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 2.1rem;
`;

export const HeaderNavListElement = styled.li<{ $isCurrentPage: boolean }>`
  position: relative;
  height: 4.8rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    background-color: var(--primaryColor);
    border-radius: 10px;
    opacity: ${({ $isCurrentPage }) => ($isCurrentPage ? '1' : '0')};
    transition: opacity 0.3s ease-in;
  }

  &:hover::before {
    opacity: 1;
  }

  > a {
    font-family: var(--ibm-plex-sans-kr);
    font-size: 2.373rem;
    font-weight: 400;
    line-height: 4.7458rem;
    letter-spacing: 0.119px;
  }
`;
