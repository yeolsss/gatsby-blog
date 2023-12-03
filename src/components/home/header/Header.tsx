import * as React from "react";
import * as St from "./header.styled";

const Header = () => {
  return (
    <St.HomeHeaderContainer>
      <St.HomeHeaderTitle>Featured Posts</St.HomeHeaderTitle>
      <St.HomeHeaderSubLink to={"#"}>
        <span>전체 포스트 보기</span>
      </St.HomeHeaderSubLink>
    </St.HomeHeaderContainer>
  );
};

export default Header;
