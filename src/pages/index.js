import React from 'react';
import { Link } from 'gatsby';

import { Layout, SEO } from '../components';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="py-4">
        <div className="border-4 border-gray-200 border-dashed rounded-lg">
          <div className="px-4 py-5 mx-6 my-6 bg-white shadow sm:rounded-lg sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Contact us
            </h3>
            <Link
              to="/contact"
              className="mt-1 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
            >
              Click here to go to our contact form.
            </Link>
            {Array(30)
              .fill('')
              .map((_, i) => (
                <br key={i} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
