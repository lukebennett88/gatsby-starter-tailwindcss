import React from 'react';

import { useForm } from '../hooks';
import { Input, TextArea } from './form-elements';

export function ContactForm() {
  const { state, handleChange, Form } = useForm({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    message: '',
  });

  return (
    <Form action="/success/" name="contact-form">
      <div className="bg-gray-100">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-4 py-5 mt-6 bg-white shadow sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Contact form
                </h3>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Please fill in the contact form and we will get back to you
                  shortly.
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="First name"
                      name="first_name"
                      value={state.first_name}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Last name"
                      name="last_name"
                      value={state.last_name}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Phone number"
                      name="phone_number"
                      value={state.phone_number}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4 md:col-span-3">
                    <Input
                      label="Email address"
                      name="email_address"
                      value={state.email_address}
                      required
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="col-span-4 md:col-span-6">
                    <TextArea
                      label="Message"
                      name="message"
                      value={state.message}
                      required
                      handleChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
