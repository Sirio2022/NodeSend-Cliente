import React, {useContext, useEffect} from 'react';
import Layout from '../components/Layout';
import AuthContext from '../context/auth/authContext';

export default function Home() {

  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  return (
    <>
      <Layout>
        <h1>Index</h1>
      </Layout>
    </>
  );
}
