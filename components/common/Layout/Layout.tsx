import React from 'react';
import { Navbar } from '..';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mx-auto w-full h-full">{children}</main>
    </>
  );
}
