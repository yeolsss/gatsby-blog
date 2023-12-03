import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Content from "./content/Content";
import Header from "./header/Header";
import * as St from "./post.styled";
import Title from "./title";

interface IPostProps {
  postCategory: string;
  createAt: string;
  title: string;
  content: string;
  postImagePath: string;
}

const Post: React.FC<IPostProps> = ({
  postCategory,
  createAt,
  title,
  postImagePath,
  content,
}) => {
  return (
    <St.PostContainer>
      <St.TitleContainer>
        <Header postCategory={postCategory} createAt={createAt} />
        <Title title={title} />
      </St.TitleContainer>
      <Content content={content} />
      <St.ImageContainer>
        <StaticImage
          src="../../../images/image 1.png"
          alt="contents photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </St.ImageContainer>
    </St.PostContainer>
  );
};

export default Post;
