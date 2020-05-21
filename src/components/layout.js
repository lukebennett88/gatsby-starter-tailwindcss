/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobileMenu } from './mobile-menu';
import { Sidebar } from './sidebar';

export function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <MobileMenu
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            onClick={() => setSidebarOpen(true)}
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto focus:outline-none md:py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
