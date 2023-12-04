import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from "gatsby-plugin-image";
import * as React from "react";
import Content from "./content/Content";
import Header from "./header/Header";
import * as St from "./post.styled";
import Title from "./title";

interface IPostProps {
  slug: string;
  title: string;
  content: string | null;
  createAt: string;
  tags: ReadonlyArray<string | null> | null;
  category: string | null;
  postImagePath?: string;
  thumbnail?: IGatsbyImageData | null;
}

const Post: React.FC<IPostProps> = ({
  slug,
  title,
  content,
  createAt,
  tags,
  category,
  postImagePath,
  thumbnail,
}) => {
  console.log("🚀 ~ file: Post.tsx:34 ~ thumbnail:", thumbnail);
  const getThumbnail = getImage(thumbnail!);
  console.log("🚀 ~ file: Post.tsx:36 ~ getThumbnail:", getThumbnail);

  return (
    <St.PostContainer>
      <St.TitleContainer>
        <Header category={category} createAt={createAt} />
        <Title title={title} />
      </St.TitleContainer>
      <Content content={content} />
      <St.ImageContainer>
        {getThumbnail ? (
          <GatsbyImage
            image={getThumbnail}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <StaticImage
            src="../../../images/image 1.png"
            alt="contents photo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </St.ImageContainer>
    </St.PostContainer>
  );
};

export default Post;
