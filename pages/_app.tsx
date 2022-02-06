import React from 'react';
import '@assets/main.css';
import type { AppProps } from 'next/app';
import { Head, Layout } from '@components/common';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
