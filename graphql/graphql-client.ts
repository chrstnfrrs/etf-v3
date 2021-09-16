import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const get = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.SANITY_URL,
  });

export { get };
