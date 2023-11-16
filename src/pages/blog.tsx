import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
interface IPropsData {
  allFile: {
    nodes: Array<{ name: string }>;
  };
}
const BlogPage: React.FC<PageProps<IPropsData>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};
export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
export const Haed: HeadFC = () => <Seo title="My Blog Posts" />;
export default BlogPage;
