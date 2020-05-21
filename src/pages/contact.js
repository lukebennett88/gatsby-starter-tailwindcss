import React from 'react';

import { Layout, SEO, ContactForm } from '../components';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  );
}
