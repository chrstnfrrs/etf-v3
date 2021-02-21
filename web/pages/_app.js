import React from 'react';
import withApollo from 'next-with-apollo';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import '../globals.css';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: process.env.SANITY_URL,
    cache: new InMemoryCache().restore(initialState || {}),
  });
})(App);
