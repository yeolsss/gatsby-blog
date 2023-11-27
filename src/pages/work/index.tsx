import React from "react";
import Layout from "../../components/layout";
import { HeadFC } from "gatsby";
import Seo from "../../shared/seo";

function Work({ location }: { location: Location }) {
  return (
    <Layout pageTitle="Work" location={location}>
      <p>Hello work</p>
    </Layout>
  );
}

export default Work;
export const Head: HeadFC = () => <Seo title="Work" />;
