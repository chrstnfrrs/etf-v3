import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import * as Types from '../types/index.d';
import { SettingsDocument } from '../graphql/generated';

export const getLinks = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Types.App.Menu> => {
  const { data } = await client.query({
    query: SettingsDocument,
  });

  return {
    navigationLinks: data.allSettings[0].navigation.navigationLinks,
    // navigationOptions: data.allSettings[0].navigation.navigationOptions,
  };
};
