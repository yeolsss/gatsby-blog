import * as React from "react";
import * as St from "./header.styled";

interface IPageProps {
  category: string | null;
  createAt: string;
}

const Header: React.FC<IPageProps> = ({ category, createAt }) => {
  return (
    <St.PostHeader>
      <h3>{category}</h3>
      <h4>{createAt}</h4>
    </St.PostHeader>
  );
};

export default Header;
