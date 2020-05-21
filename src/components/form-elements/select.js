import React from 'react';
import PropTypes from 'prop-types';

export function Select({
  handleChange,
  label,
  name,
  options,
  required,
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
      <select
        id={name}
        name={name}
        value={value}
        options={options}
        required={required}
        onChange={handleChange}
        className="block w-full px-3 py-0 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </fieldset>
  );
}

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
};
