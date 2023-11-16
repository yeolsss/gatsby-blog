import { HeadFC, Link, PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

interface IFrontmatter {
  title: string;
  date: string;
  slug: string;
}
interface IPropsData {
  allMdx: {
    nodes: Array<{ frontmatter: IFrontmatter }>;
  };
}
const BlogPage: React.FC<PageProps<IPropsData>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.frontmatter.title}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
            {node.frontmatter.title}
          </Link>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY. MM. DD")
          slug
        }
        id
      }
    }
  }
`;
export const Haed: HeadFC = () => <Seo title="My Blog Posts" />;
export default BlogPage;
