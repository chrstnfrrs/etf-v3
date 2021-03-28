import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../globals.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AppLayout = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link href='/favicon.ico' rel='shortcut icon' />
    </Head>
    <Component {...pageProps} />
  </>
);

export default AppLayout;
