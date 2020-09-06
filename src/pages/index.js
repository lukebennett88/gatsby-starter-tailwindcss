import React from 'react';

import { Layout, SEO, Contact } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
