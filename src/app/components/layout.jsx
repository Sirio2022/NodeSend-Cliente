import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <div className="mt-20">{children}</div>
        </div>
      </div>
    </>
  );
}
