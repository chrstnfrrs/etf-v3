import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '../globals.css';

const AppLayout = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <>
      <Head>
        <link href='/favicon.ico' rel='shortcut icon' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default AppLayout;
