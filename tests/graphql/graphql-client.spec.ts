import * as Apollo from '@apollo/client';

import * as GraphqlClient from '../../graphql/graphql-client';
import * as Types from '../../types/index.d';
import * as ApolloFactory from '../model-factories/apollo';

jest.mock('@apollo/client');

const { ApolloClient } = Apollo as jest.Mocked<typeof Apollo>;

describe('Given a graphql client', () => {
  describe('When accessing the client', () => {
    let client: Types.Apollo.Client;

    beforeEach(() => {
      client = ApolloFactory.createClient();
      ApolloClient.mockImplementation(
        () => client as Apollo.ApolloClient<Apollo.NormalizedCacheObject>,
      );
    });
    test('Then should return client', () => {
      expect(GraphqlClient.get()).toStrictEqual(client);
    });
  });
});
