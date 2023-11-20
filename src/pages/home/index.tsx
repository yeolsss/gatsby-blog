import React from 'react';
import Layout from '../../components/layout';
import { HeadFC } from 'gatsby';
import Seo from '../../shared/seo';

function home({ location }: { location: Location }) {
  return (
    <Layout location={location} pageTitle="Home">
      <p>Hello Home</p>
    </Layout>
  );
}

export default home;
export const Head: HeadFC = () => <Seo title="Home" />;
