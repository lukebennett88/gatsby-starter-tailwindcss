import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Select({
  defaultValue = '',
  errors,
  isFullWidth,
  label,
  name,
  options = [],
  register,
  required = true,
}) {
  return (
    <div className={isFullWidth ? 'sm:col-span-2' : ''}>
      <span className="block text-sm font-medium leading-5 text-gray-700">
        {label}
        {required && ' *'}
      </span>
      <div className="relative mt-1 shadow-sm">
        <select
          id={name}
          name={name}
          defaultValue=""
          required={required}
          aria-invalid={!!errors[name]}
          ref={register({
            required: required && (
              <Error message={`${label} is a required field`} />
            ),
          })}
          className="block w-full px-4 py-3 transition duration-150 ease-in-out rounded-none form-select"
        >
          {defaultValue !== '' && (
            <option value="" disabled>
              {defaultValue}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errors[name]?.message}
    </div>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  errors: PropTypes.object,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export { Select };
