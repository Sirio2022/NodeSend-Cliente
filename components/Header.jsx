import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthContext from '../context/auth/authContext';
import AppContext from '../context/app/appContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuario, cerrarSesion } = authContext;

  // Context de la app
  const appContext = useContext(AppContext);
  const { limpiarState } = appContext;

  const redireccionar = () => {
    router.push('/');
    limpiarState();
  };

  return (
    <>
      <header className="py-8 flex flex-col md:flex-row items-center justify-between">
        <Image
          src="/logo.svg"
          width={142}
          height={142}
          alt="Logo"
          className="w-64 mb-8 md:mb-0 cursor-pointer"
          priority={true}
          onClick={() => redireccionar()}
        />

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
