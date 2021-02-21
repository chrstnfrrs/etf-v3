import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

let client;

export const getGraphqlClient = (): ApolloClient<NormalizedCacheObject> => {
  if (!client) {
    console.log('Creating a GQL Client');
    client = new ApolloClient({
      uri: process.env.SANITY_URL,
      cache: new InMemoryCache(),
    });
  }

  return client;
};
