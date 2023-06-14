'use client';

import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AuthContext from '@/app/context/auth/authContext';

export default function Header() {
  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, usuario, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, [usuarioAutenticado]);

  return (
    <header className="py-8 flex flex-col md:flex-row justify-between items-center">
      <Link href="/" rel="preLoad" as="/">
        <Image
          src="logo.svg"
          alt="logo"
          width={150}
          height={33}
          className="w-64 mb-8 md:b-0"
          priority
        />
      </Link>

      <div>
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-2">Hola: {usuario.nombre}</p>
            <button
              type="button"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase cursor-pointer"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
              rel="preload"
              as="login"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/crearcuenta"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
              rel="preload"
              as="crearcuenta"
            >
              Crear Cuenta
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
