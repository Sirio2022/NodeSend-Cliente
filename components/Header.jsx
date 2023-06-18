import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Image src="/logo.svg" width={142} height={142} alt="Logo" className='w-64 mb-8 md:mb-0' />
    </header>
  );
}
