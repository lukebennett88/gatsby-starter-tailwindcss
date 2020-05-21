import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { navigate } from 'gatsby';

export function useForm(initialState) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }

  function Form({
    action = 'success',
    children,
    className,
    name = 'contact_form',
  }) {
    return (
      <form
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
        action={action}
        className={className}
        method="POST"
        name={name}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{' '}
            <input id="bot-field" name="bot-field" onChange={handleChange} />
          </label>
        </div>
        {children}
      </form>
    );
  }

  Form.propTypes = {
    action: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
  };
  return { Form, handleChange, state };
}
