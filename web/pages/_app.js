import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AppMenu from '../components/AppMenu';
import '../globals.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <AppMenu />
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.SANITY_URL,
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
