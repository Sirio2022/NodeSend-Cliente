import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-8 flex flex-col md:flex-row justify-between items-center">
      <Link href="/" rel='preLoad' as="/">
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
      </div>
    </header>
  );
}
