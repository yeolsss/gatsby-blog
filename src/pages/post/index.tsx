import React from 'react';
import Layout from '../../components/layout';
import Seo from '../../shared/seo';
import { HeadFC } from 'gatsby';

function Post({ location }: { location: Location }) {
  return (
    <Layout pageTitle="Post" location={location}>
      <p>Hello Post</p>
    </Layout>
  );
}

export default Post;
export const Head: HeadFC = () => <Seo title="Post" />;
