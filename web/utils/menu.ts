import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { SettingsDocument } from '../graphql/generated';
import { MenuLinks } from '../types/app';

export const getLinks = async (client: ApolloClient<NormalizedCacheObject>): Promise<MenuLinks> => {
  const { data } = await client.query({
    query: SettingsDocument,
  });

  return {
    navigationLinks: data?.allSettings[0].navigation.navigationLinks,
    navigationOptions: data?.allSettings[0].navigation.navigationOptions,
  };
};
