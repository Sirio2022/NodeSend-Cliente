import React, { useContext, useState } from 'react';
import AppContext from '../context/app/appContext';

export default function Formulario() {
  // Context de la app
  const appContext = useContext(AppContext);
  const { agregarPassword } = appContext;

  const [tienePassword, setTienePassword] = useState(false);

  return (
    <div className="w-full mt-10">
      <div className="mb-4">
        <label className="text-lg text-gray-800" htmlFor="">
          Eliminar archivos despues de:
        </label>

        <select className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500 mb-10">
          <option value="" selected disabled>
            -- Seleccione --
          </option>
          <option value="1">1 Descarga</option>
          <option value="5">5 Descargas</option>
          <option value="10">10 Descargas</option>
          <option value="20">20 Descargas</option>
        </select>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <label className="text-lg text-gray-800 ">
              Proteger con contraseña
            </label>
            <input
              type="checkbox"
              className="mr-2 text-lg text-gray-800"
              onChange={() => setTienePassword(!tienePassword)}
            />
          </div>
          {tienePassword ? (
            <input
              type="password"
              className="appearance-none w-full mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 rounded leading-none focus:outline-none focus:border-gray-500 mb-10"
              onChange={(e) => agregarPassword(e.target.value)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
