import { HeadFC } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../../components/home/header";
import Posts from "../../components/posts";
import Layout from "../../shared/layout";
import Seo from "../../shared/seo";

function home({ location }: { location: Location }) {
  return (
    <Layout location={location} pageTitle="Home">
      <HomeContainer>
        <Header />
        <Posts />
      </HomeContainer>
    </Layout>
  );
}

export default home;
export const Head: HeadFC = () => <Seo title="Home" />;

export const HomeContainer = styled.section``;
