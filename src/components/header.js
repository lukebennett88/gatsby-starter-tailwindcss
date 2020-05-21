import React, { useState } from 'react';
import { Link } from 'gatsby';

import { useGraphQL } from '../hooks';

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const { allSiteNavigationJson, site } = useGraphQL();
  return (
    <header className="sticky top-0 w-screen mb-6 text-white bg-teal-600 shadow-md">
      <div className="flex items-center justify-between max-w-4xl px-4 py-6 mx-auto">
        <h1 className="text-4xl font-bold leading-none">
          <Link to="/">{site.siteMetadata.title}</Link>
        </h1>
        <button
          onClick={() => setOpen(!isOpen)}
          type="button"
          className="relative z-50 inline-block px-3 py-2 text-sm font-semibold leading-none tracking-wide uppercase border border-white"
        >
          Menu
        </button>
        {isOpen && (
          <nav className="fixed inset-0 z-40 flex items-center justify-center h-full text-3xl font-bold text-white bg-teal-600">
            <ul>
              {allSiteNavigationJson.nodes.map((node) => (
                <li key={node.id}>
                  <Link to={node.href} onClick={() => setOpen(false)}>
                    {node.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
