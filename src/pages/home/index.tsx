import React from "react";
import Layout from "../../shared/layout";
import { HeadFC } from "gatsby";
import Seo from "../../shared/seo";
import { ThemeContextProvider } from "../../context/themeContext";

function home({ location }: { location: Location }) {
  return (
    <ThemeContextProvider>
      <Layout location={location} pageTitle="Home">
        <p>Hello Home</p>
      </Layout>
    </ThemeContextProvider>
  );
}

export default home;
export const Head: HeadFC = () => <Seo title="Home" />;
