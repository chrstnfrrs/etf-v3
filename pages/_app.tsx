import * as React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
// import { setTheme } from 'aspire-components-react';

import '../globals.css';
import { ETFMenu } from '../components/etf/etf-menu';

const AppLayout = ({ Component, pageProps }: AppProps): React.ReactNode => {
  // if (typeof window !== 'undefined') {
  //   const ctaPrimary = '#003366';
  //   const textWhite = 'rgba(239, 246, 255, 1)';

  //   setTheme({
  //     ANav: {
  //       background: ctaPrimary,
  //       color: textWhite,
  //     },
  //   });
  // }

  return (
    <>
      <Head>
        <link href='/favicon.ico' rel='shortcut icon' />
      </Head>
      <ETFMenu />
      <Component {...pageProps} />
    </>
  );
};

export default AppLayout;
