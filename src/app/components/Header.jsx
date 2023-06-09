import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="py-8 flex flex-col md:flex-row justify-between items-center">
      <Image
        src="logo.svg"
        alt="logo"
        width={150}
        height={33}
        className="w-64 mb-8 md:b-0"
      />
    </header>
  );
}
