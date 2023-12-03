import { HeadFC } from "gatsby";
import React from "react";
import styled from "styled-components";
import Header from "../../components/home/header/Header";
import Layout from "../../shared/layout";
import Seo from "../../shared/seo";

function home({ location }: { location: Location }) {
  return (
    <Layout location={location} pageTitle="Home">
      <HomeContainer>
        <Header />
      </HomeContainer>
    </Layout>
  );
}

export default home;
export const Head: HeadFC = () => <Seo title="Home" />;

export const HomeContainer = styled.section`
  background-color: var(--backgroundColor3);
  padding: 16px;
  border-radius: 16px;
  width: 100%;
  height: auto;
  transition: background-color var(--transition-second);
`;
