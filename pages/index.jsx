import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import AuthContext from '../context/auth/authContext';
import AppContext from '../context/app/appContext';
import Link from 'next/link';
import Dropzone from '../components/Dropzone';
import Alerta from '../components/Alerta';

export default function Home() {
  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  // Extraer el mensaje de error de archivos
  const appContext = useContext(AppContext);
  const { mensaje_archivo } = appContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
          {mensaje_archivo && <Alerta />}
          <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
            <Dropzone />
            <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
              <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
                Compartir archivos de forma segura y privada.
              </h2>
              <p className="text-lg leading-loose">
                <span className="text-red-500 font-bold">ReactNodeSend</span> te
                permite compartir archivos con cifrado de extremo a extremo y un
                archivo que es eliminado después de una sola descarga. Así que
                puedes mantener lo que compartes en privado y asegurarte de que
                tus cosas no permanezcan en línea para siempre.
              </p>
              <Link
                className="text-red-500 font-bold text-lg hover:text-red-700 cursor-pointer"
                href="/crearcuenta"
              >
                Crear una cuenta para mayores beneficios
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
