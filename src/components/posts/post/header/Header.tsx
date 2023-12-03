import * as React from "react";
import * as St from "./header.styled";

interface IPageProps {
  postCategory: string;
  createAt: string;
}

const Header: React.FC<IPageProps> = ({ postCategory, createAt }) => {
  return (
    <St.PostHeader>
      <h3>{postCategory}</h3>
      <h4>{createAt}</h4>
    </St.PostHeader>
  );
};

export default Header;
