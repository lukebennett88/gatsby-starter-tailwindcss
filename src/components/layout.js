/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white border-t-4 border-teal-500">
      <Header />
      <main className="flex-1 w-full max-w-3xl px-6 mx-auto lg:max-w-7xl">
        <article className="grid py-12 border-gray-100 lg:grid-cols-3 lg:gap-16">
          <Sidebar />
          <div className="col-span-2 space-y-12 lg:py-6">{children}</div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
