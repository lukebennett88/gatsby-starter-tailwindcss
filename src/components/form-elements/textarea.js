import PropTypes from 'prop-types';
import React from 'react';

export function TextArea({
  handleChange,
  label,
  name,
  required = true,
  rows = 4,
  value,
}) {
  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 shadow-sm">
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          required={required}
          onChange={handleChange}
          className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-textarea focus:outline-none focus:shadow-outline-primary focus:border-primary-light"
        />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
};
