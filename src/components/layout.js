/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Footer } from './footer';

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white border-t-4 border-teal-500 fill-available">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
