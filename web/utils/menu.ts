import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { AllMenuDocument } from '../graphql/generated';
import { MenuLinks } from '../types/app';

export const getLinks = async (client: ApolloClient<NormalizedCacheObject>): Promise<MenuLinks> => {
  const { data } = await client.query({
    query: AllMenuDocument,
  });

  return {
    leftLinks: data?.allMenu?.[1]?.leftLinks,
    rightLinks: data?.allMenu?.[1]?.rightLinks,
  };
};
