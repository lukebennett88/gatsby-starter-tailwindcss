import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <article className="px-4 pt-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          404: Page Not Found
        </h1>
        <p className="text-center lead">
          Sorry, the page you were looking for could not be found.
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

export default NotFoundPage;
