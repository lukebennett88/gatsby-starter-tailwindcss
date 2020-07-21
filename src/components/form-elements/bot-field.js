import React from 'react';
import PropTypes from 'prop-types';

export function BotField({ handleChange }) {
  return (
    <>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label htmlFor="bot-field">
          Don’t fill this out:{' '}
          <input id="bot-field" name="bot-field" onChange={handleChange} />
        </label>
      </div>
    </>
  );
}

BotField.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
