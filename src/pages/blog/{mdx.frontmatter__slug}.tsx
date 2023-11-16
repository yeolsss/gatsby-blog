import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { PageProps, graphql } from "gatsby";

const BlogPost: React.FC<PageProps<any>> = ({ data, children }) => {
  console.log("🚀 ~ file: {mdx.frontmatter__slug}.tsx:7 ~ data:", data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="Super Cool Blog Posts" />;
export default BlogPost;
