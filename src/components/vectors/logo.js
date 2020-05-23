import PropTypes from 'prop-types';
import React from 'react';

export function Logo({ className }) {
  return (
    <svg
      aria-label="Site logo"
      className={className}
      fillRule="evenodd"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2.436l7.2-3.6v-4.8l-2.4-1.2 2.4-1.2v-4.8l-7.2-3.6v16.8l-4.8-2.4v-12l-2.4 1.2v12l7.2 3.6zm2.4-3.6l2.4-1.2v-2.4l-2.4-1.2v4.8zm0-7.2l2.4-1.2v-2.4l-2.4-1.2v4.8z"
      />
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};
