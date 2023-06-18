import React from 'react';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>React - NodeSend</title>
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <main className="mt-20">{children}</main>
        </div>
      </div>
    </>
  );
}
