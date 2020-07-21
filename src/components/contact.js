import React from 'react';
import { Link } from 'gatsby';

import { useForm } from '../hooks';
import { Form, Input, TextArea, CheckBox } from './form-elements';

export function Contact() {
  const { state, handleSubmit, handleChange } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
    agree_to_privacy_policy: false,
  });

  return (
    <article className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute inset-0 flex w-1/3 w-full h-full overflow-hidden"
      >
        <div className="w-1/2 bg-brand-pink">
          <div className="h-full transform -skew-x-12 bg-brand-pink" />
        </div>
        <div className="w-1/2 bg-brand-blue">
          <div className="h-full transform -skew-x-12 bg-brand-blue" />
        </div>
      </div>
      <div className="relative max-w-xl px-4 py-12 mx-auto lg:my-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="h2">Get in touch with our team</h2>
        </div>
        <div className="mt-12">
          <Form
            onSubmit={handleSubmit}
            action="/success/"
            name="contact-form"
            className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <Input
              name="first_name"
              label="First name"
              value={state.first_name}
              handleChange={handleChange}
            />
            <Input
              name="last_name"
              label="Last name"
              value={state.last_name}
              handleChange={handleChange}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              isFullWidth
              value={state.email}
              handleChange={handleChange}
            />
            <Input
              name="phone_number"
              label="Phone number"
              type="tel"
              isFullWidth
              value={state.phone_number}
              handleChange={handleChange}
            />
            <Input
              name="subject"
              label="Subject"
              isFullWidth
              value={state.subject}
              handleChange={handleChange}
            />
            <TextArea
              name="message"
              label="Message"
              value={state.message}
              handleChange={handleChange}
            />
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <CheckBox />
                <div className="ml-3">
                  <p className="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the{' '}
                    <Link
                      to="/privacy-policy/"
                      className="font-medium text-gray-700 underline focus:outline-none focus:shadow-outline-primary"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-none hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-primary active:bg-gray-900"
                >
                  Submit
                </button>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </article>
  );
}
