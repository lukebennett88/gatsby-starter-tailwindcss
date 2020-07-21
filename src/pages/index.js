import React from 'react';

import { Layout, SEO, Contact } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Contact />
    </Layout>
  );
}
