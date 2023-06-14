'use client'

import React, { useContext, useEffect } from 'react';
import Layout from './components/Layout';
import AuthContext from './context/auth/authContext';

export default function Page() {

  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [usuarioAutenticado]);
 


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
