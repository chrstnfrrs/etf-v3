import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { AllMenuDocument } from '../graphql/generated';
import { MenuLinks } from '../types/app';

export const getLinks = async (client: ApolloClient<NormalizedCacheObject>): Promise<MenuLinks> => {
  const { data } = await client.query({
    query: AllMenuDocument,
  });

  return {
    links: data?.allMenu?.[1]?.link,
  };
};
