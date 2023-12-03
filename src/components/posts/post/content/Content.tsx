import * as React from "react";
import * as St from "./content.styled";

interface IPageProps {
  content: string;
}
const Content: React.FC<IPageProps> = ({ content }) => {
  return (
    <St.PostContentContainer>
      <p>{content}</p>
    </St.PostContentContainer>
  );
};

export default Content;
