import * as React from "react";
import * as St from "./content.styled";

interface IPageProps {
  content: string | null;
}
const Content: React.FC<IPageProps> = ({ content }) => {
  return (
    <St.PostContentContainer>
      <div
        dangerouslySetInnerHTML={{
          __html: content!,
        }}
      ></div>
    </St.PostContentContainer>
  );
};

export default Content;
