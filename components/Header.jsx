import React, {useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthContext from '../context/auth/authContext';

export default function Header() {
  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuario, cerrarSesion } = authContext;





  return (
    <>
      <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={142}
            height={142}
            alt="Logo"
            className="w-64 mb-8 md:mb-0"
            priority={true}
          />
        </Link>

        <div>
          {usuario ? (
            <div className="flex items-center">
              <p className="mr-2">Hola {usuario.nombre}!</p>
              <button
                type="button"
                className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
                onClick={() => cerrarSesion()}

              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              <Link
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
              href="/login"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/crearcuenta"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
            >
              Crear cuenta
            </Link>
            </>
          )}
        
        </div>
      </header>
    </>
  );
}
