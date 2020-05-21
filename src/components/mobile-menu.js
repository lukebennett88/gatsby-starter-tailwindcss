import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'gatsby';
import { Logo } from './vectors';
import { useGraphQL } from '../hooks/use-graphql';

export function MobileMenu({ isSidebarOpen, setSidebarOpen }) {
  const handleEscape = (e) => {
    if (typeof document !== 'undefined') {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    }
  };

  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', handleEscape);
  }

  const { allSiteNavigationJson } = useGraphQL();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setSidebarOpen(false)}
        type="button"
        aria-label="Close menu."
        className={`fixed inset-0 z-30 transition-opacity duration-300 ease-linear bg-gray-600 opacity-0 pointer-events-none ${
          isSidebarOpen
            ? 'opacity-75 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`fixed inset-y-0 left-0 z-40 flex flex-col w-full max-w-xs duration-300 ease-in-out transform bg-gray-800 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-0 right-0 p-1 -mr-14">
          {isSidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
            >
              <svg
                className="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Logo className="w-auto h-8 mr-3" />
            <span className="font-medium text-white">Luke Bennett</span>
          </div>
          <nav className="px-2 mt-5">
            {allSiteNavigationJson.nodes.map((navItem) => (
              <Link
                key={navItem.id}
                to={navItem.link}
                activeClassName="bg-gray-900"
                className="flex items-center px-2 py-2 mt-1 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md group hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                {/* <navItem.icon className="w-6 h-6 mr-3 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300" /> */}
                {navItem.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-shrink-0 p-4 bg-gray-700">
          <a
            href="https://www.lukebennett.com.au"
            className="flex-shrink-0 block group focus:outline-none"
          >
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block rounded-full h-9 w-9"
                  src="https://res.cloudinary.com/lukebennett/image/upload/w_100,h_100,f_auto,q_auto/avatar.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium leading-5 text-white">
                  Luke Bennett
                </p>
                <p className="text-xs font-medium leading-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:underline">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  isSidebarOpen: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
};
