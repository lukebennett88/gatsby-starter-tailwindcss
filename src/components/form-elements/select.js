import PropTypes from 'prop-types';
import React from 'react';

export function Select({ id, label, options, setIndex, setItemsToShow }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <select
          onChange={(e) => {
            setIndex(0);
            setItemsToShow(Number(e.target.value));
          }}
          defaultValue={label}
          id={id}
          className="block w-full transition duration-150 ease-in-out rounded-none form-select sm:text-sm sm:leading-5 focus:outline-none focus:shadow-outline-primary focus:border-primary-light"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {label}: {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  setIndex: PropTypes.func.isRequired,
  setItemsToShow: PropTypes.func.isRequired,
};
