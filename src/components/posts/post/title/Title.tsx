import * as React from "react";
import * as St from "./title.styled";

interface IPageProps {
  title: string;
}

const Title: React.FC<IPageProps> = ({ title }) => {
  return (
    <St.PostTitleContainer>
      <h1>{title}</h1>
    </St.PostTitleContainer>
  );
};

export default Title;
