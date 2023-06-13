import React from 'react';
import Layout from './components/Layout';

export default function Page() {
  return (
    <Layout
      title="Home"
      description="Home, para enviar tus archios a tus clientes o amigos"
      rel="preload"
      as="home"
    >
      <h1>Home Page</h1>
    </Layout>
  );
}
