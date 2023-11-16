import { HeadFC, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm proud creator of this site, which I built with Gatsby.{" "}
        </p>
      </Layout>
    </main>
  );
};
export const Head: HeadFC = () => (
  <>
    <Seo title="About Me" />
    <meta name="description" content="About me" />
  </>
);
export default AboutPage;
