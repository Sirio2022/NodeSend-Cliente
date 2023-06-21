import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';
import axiosInstance from '../../config/axios';
import AppContext from '../../context/app/appContext';
import Alerta from '../../components/Alerta';

export async function getServerSideProps({ params }) {
  const resultado = await axiosInstance.get(`/api/enlaces/${params.enlace}`);

  return {
    props: {
      enlaces: resultado.data,
    },
  };
}

export async function getServerSidePaths() {
  // Consultar los enlaces
  const enlaces = await axiosInstance.get('api/enlaces/');
  return {
    paths: enlaces.data.enlaces.map((enlace) => ({
      params: { enlace: enlace.url },
    })),
    fallback: false,
  };
}

export default function Enlace({ enlaces }) {
  // Extraer funciones de appContext
  const appContext = useContext(AppContext);
  const { mostrarAlerta, mensaje_archivo } = appContext;

  const [tienePassword, setTienePassword] = useState(enlaces.password);
  const [password, setPassword] = useState('');

  //console.log(enlaces);

  const verificarPassword = async (e) => {
    e.preventDefault();
    const data = {
      password,
    };

    try {
      const resultado = await axiosInstance.post(
        `/api/enlaces/${enlaces.enlace}`,
        data
      );
      enlaces.archivo = resultado.data.archivo;
      setTienePassword(resultado.data.password);
    } catch (error) {
      mostrarAlerta(error.response.data.msg);
    }
  };
  return (
    <Layout>
      {tienePassword ? (
        <>
          <p className="text-center text-gray-700">
            Este enlace esta protegido por contraseña.
          </p>
          {mensaje_archivo && <Alerta />}
          <div className="flex justify-center mt-5">
            <div className="w-full max-w-lg">
              <div className="w-full max-w-lg">
                <form
                  className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                  onSubmit={(e) => verificarPassword(e)}
                >
                  <div className="mb-4">
                    <label
                      className="block text-black text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      placeholder="Para descargar el archivo"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                    value="Validar Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl text-center text-gray-700">
            Descarga tu archivo:
          </h1>
          <div className="flex items-center justify-center mt-10">
            <a
              href={`${process.env.backendURL}/api/archivos/${enlaces.archivo}`}
              className="bg-red-500 text-center px-10 py-3 rounded uppercase font-bold text-white cursor-pointer"
              download
            >
              Aquí
            </a>
          </div>
        </>
      )}
    </Layout>
  );
}
