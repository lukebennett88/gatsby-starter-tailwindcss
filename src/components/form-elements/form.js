import React from 'react';
import PropTypes from 'prop-types';

import { BotField } from './bot-field';

export function Form({
  action = '/success/',
  children,
  className,
  onSubmit,
  name = 'contact_form',
}) {
  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      action={action}
      className={className}
      method="POST"
      name={name}
    >
      <BotField />
      {children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
};
