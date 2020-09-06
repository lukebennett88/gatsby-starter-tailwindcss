import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function SuccessPage() {
  return (
    <Layout>
      <SEO title="Success" />
      <article className="px-4 pt-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Success
        </h1>
        <p className="text-center lead">
          Thank you for your message. We will get back to you shortly.
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block rounded-none bg-gray-800 px-4 py-2.5 text-base leading-6 font-semibold text-white focus:border-gray-900 hover:bg-gray-700 active:bg-gray-900"
          >
            Return home
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export default SuccessPage;
