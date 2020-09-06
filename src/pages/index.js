import React from 'react';

import { Layout, SEO, Sidebar, Contact } from '../components';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex-1 w-full max-w-3xl px-6 mx-auto lg:max-w-7xl">
        <div className="grid py-12 border-gray-100 lg:grid-cols-3 lg:gap-16">
          <Sidebar />
          <div className="col-span-2 space-y-12">
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
