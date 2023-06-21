import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import axiosInstance from '../config/axios';
import appContext from '../context/app/appContext';
import authContext from '../context/auth/authContext';
import Formulario from './Formulario';

const Dropzone = () => {
  // Extraer funciones de appContext
  const AppContext = useContext(appContext);
  const { mostrarAlerta, subirArchivo, cargando, crearEnlace } = AppContext;

  // Extraer funciones de authContext
  const AuthContext = useContext(authContext);
  const { usuario, autenticado } = AuthContext;

  const onDropRejected = () => {
    mostrarAlerta(
      'No se pudo subir, el límite es 10MB, obten una cuenta gratis para subir archivos más grandes'
    );
  };

  const onDropAccepted = useCallback(
    async (acceptedFiles) => {
      // Crear un form data
      const formData = new FormData();
      formData.append('archivo', acceptedFiles[0]);

      subirArchivo(formData, acceptedFiles[0].path);
    },
    [subirArchivo]
  );

  // Extraer contenido de Dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize: 10000000 });

  // Mostrar mensaje de archivo
  const archivos = acceptedFiles.map((archivo) => (
    <li
      className="bg-white flex-1 p-3 mb-4 shadow-lg rounded"
      key={archivo.lastModified}
    >
      <p className="font-bold text-xl">{archivo.path}</p>Tamaño:{' '}
      <p className="text-sm font-light">
        {(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB
      </p>
    </li>
  ));

  return (
    <>
      <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-200 px-4">
        {acceptedFiles.length > 0 ? (
          <>
            <div className="mt-10 w-full">
              <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
              <ul>{archivos}</ul>

              {autenticado ? <Formulario /> : 'No autenticado'}

              {cargando ? (
                <>
                  <p className="text-2xl text-black text-center my-5">
                    Subiendo Archivo!
                  </p>
                  <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
                  onClick={() => crearEnlace()}
                >
                  Crear Enlace
                </button>
              )}
            </div>
          </>
        ) : (
          <div
            {...getRootProps({
              className: 'dropzone w-full py-32',
            })}
          >
            <input className="h-100" {...getInputProps()} />

            {isDragActive ? (
              <p className="text-2xl text-center text-gray-600">
                Suelta el archivo
              </p>
            ) : (
              <div className="text-center">
                <p className="text-2xl text-center text-gray-600">
                  Arrastra archivos aquí
                </p>
                <button
                  type="button"
                  className="bg-blue-700 w-full py-3 rounded-lg text-white my-10 hover:bg-blue-800"
                >
                  Selecciona archivos para subir
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropzone;
