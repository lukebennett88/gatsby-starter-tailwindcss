import React from 'react';
import PropTypes from 'prop-types';

import { Error } from './error';

function Checkbox({ label, name, required = true, register, errors }) {
  return (
    <div className="sm:col-span-2">
      <div className="flex items-start">
        <label htmlFor={name} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={name}
            id={name}
            aria-invalid={!!errors[name]}
            ref={register({
              required: required && (
                <Error message="You must agree to the privacy policy" />
              ),
            })}
            className="form-checkbox"
          />
          <span className="text-sm font-medium leading-5 text-gray-700">
            {label}
            {required && ' *'}
          </span>
        </label>
      </div>
      {errors[name]?.message}
    </div>
  );
}

Checkbox.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export { Checkbox };
