import React from 'react';
import Head from 'next/head';
import withApollo from 'next-with-apollo';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import '../globals.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.SANITY_URL,
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
