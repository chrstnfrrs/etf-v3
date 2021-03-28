import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  AllPagesDocument,
  HomePageDocument,
  PageDocument,
  Pages,
} from '../graphql/generated';

const getHomePage = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Pages> => {
  const { data } = await client.query({
    query: HomePageDocument,
  });

  return data.allPages[0];
};

const getPages = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Pages[]> => {
  const { data } = await client.query({
    query: AllPagesDocument,
  });

  return data.allPages;
};

const getPage = async (
  client: ApolloClient<NormalizedCacheObject>,
  route: string,
): Promise<Pages> => {
  const { data } = await client.query({
    query: PageDocument,
    variables: {
      route,
    },
  });

  return data.allPages[0];
};

export { getHomePage, getPage, getPages };
