import { HeadFC, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../../components/home/header";
import Posts from "../../components/posts";
import Layout from "../../shared/layout";
import Seo from "../../shared/seo";

function home({
  location,
  data,
}: {
  location: Location;
  data: Queries.HomeBlogPostQuery;
}) {
  return (
    <Layout location={location} pageTitle="Home">
      <HomeContainer>
        <Header />
        <Posts data={data} />
      </HomeContainer>
    </Layout>
  );
}

export default home;

export const Head: HeadFC = () => <Seo title="Home" />;

export const query = graphql`
  query HomeBlogPost {
    allContentfulYeolsBlog(sort: { createdAt: DESC }, limit: 2) {
      totalCount
      nodes {
        id
        slug
        description
        tags
        title
        createdAt(formatString: "YYYY. MM. DD")
        content {
          childMarkdownRemark {
            html
          }
        }
        category
        thumbnail {
          gatsbyImageData(placeholder: BLURRED, height: 142, width: 630)
        }
      }
    }
  }
`;

export const HomeContainer = styled.section``;
