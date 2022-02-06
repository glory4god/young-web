import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header></header>
      <main className="mx-auto w-screen">{children}</main>
    </>
  );
}
