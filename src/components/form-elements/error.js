import PropTypes from 'prop-types';
import React from 'react';

function Error({ message }) {
  return (
    <p
      role="alert"
      className="mt-1 text-xs font-medium tracking-widest text-red-700 uppercase"
    >
      {message}
    </p>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export { Error };
