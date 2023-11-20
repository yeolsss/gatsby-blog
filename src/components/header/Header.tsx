import React from 'react';
import * as St from './header.styled';
import { Link } from 'gatsby';

interface IHeaderProps {
  pageTitle: string;
  location: Location;
}

function Header({ pageTitle, location }: IHeaderProps) {
  return (
    <St.Header>
      <St.HeaderLogoWrapper>
        <St.Logo>Yeols.dev</St.Logo>
      </St.HeaderLogoWrapper>
      <St.HeaderNav>
        <St.HeaderNavList>
          <St.HeaderNavListElement $isCurrentPage={pageTitle === 'Home'}>
            <Link to="/home">home</Link>
          </St.HeaderNavListElement>
          <St.HeaderNavListElement $isCurrentPage={pageTitle === 'Work'}>
            <Link to="/work">work</Link>
          </St.HeaderNavListElement>
          <St.HeaderNavListElement $isCurrentPage={pageTitle === 'Post'}>
            <Link to="/post">post</Link>
          </St.HeaderNavListElement>
        </St.HeaderNavList>
      </St.HeaderNav>
    </St.Header>
  );
}

export default Header;
