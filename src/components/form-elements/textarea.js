import React from 'react';
import PropTypes from 'prop-types';

export function TextArea({
  autoComplete,
  handleChange,
  label,
  name,
  required,
  rows = 5,
  value,
}) {
  return (
    <fieldset>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        required={required}
        autoComplete={autoComplete}
        onChange={handleChange}
        className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-textarea focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      />
    </fieldset>
  );
}

TextArea.propTypes = {
  autoComplete: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
};
