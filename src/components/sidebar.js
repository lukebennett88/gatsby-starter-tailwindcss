import React from 'react';
import { Link } from 'gatsby';

import { Logo } from './vectors';
import { useGraphQL } from '../hooks';

export function Sidebar() {
  const { allSiteNavigationJson } = useGraphQL();
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800">
        <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <Link to="/" className="flex items-center flex-shrink-0 px-4">
            <Logo className="w-auto h-8 mr-3 transition duration-150 ease-in-out rounded-full hover:bg-white" />
            <span className="font-medium text-white">Gatsby Starter</span>
          </Link>
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <nav className="flex-1 px-2 mt-5 bg-gray-800">
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
