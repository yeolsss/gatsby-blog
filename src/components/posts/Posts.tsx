import * as React from "react";
import Post from "./post";
import * as St from "./posts.styled";

const Posts = ({ data }: { data: Queries.HomeBlogPostQuery }) => {
  const { nodes } = data.allContentfulYeolsBlog;
  console.log("🚀 ~ file: Posts.tsx:7 ~ Posts ~ nodes:", nodes);
  return (
    <St.PostsContainer>
      {nodes.map((data) => (
        <Post
          key={data.id}
          slug={data.slug!}
          title={data.title!}
          content={data.content?.childMarkdownRemark?.html!}
          createAt={data.createdAt!}
          tags={data.tags ? [...data.tags] : []}
          category={data.category}
          thumbnail={data.thumbnail?.gatsbyImageData}
        />
      ))}
    </St.PostsContainer>
  );
};

export default Posts;
