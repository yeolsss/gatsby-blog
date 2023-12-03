import { HeadFC } from "gatsby";
import React from "react";
import Header from "../../components/home/header/Header";
import Layout from "../../shared/layout";
import Seo from "../../shared/seo";
import * as St from "./home.styled";

function home({ location }: { location: Location }) {
  return (
    <Layout location={location} pageTitle="Home">
      <St.HomeContainer>
        <Header />
      </St.HomeContainer>
    </Layout>
  );
}

export default home;
export const Head: HeadFC = () => <Seo title="Home" />;
