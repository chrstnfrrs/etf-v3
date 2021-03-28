import { createMockClient, MockApolloClient } from 'mock-apollo-client';
import * as Apollo from '@apollo/client';

import { getGraphqlClient } from '../../graphql/utils';

jest.mock('@apollo/client');

const { ApolloClient } = Apollo as jest.Mocked<typeof Apollo>;

describe('utils', () => {
  describe('getGraphqlClient', () => {
    let client: MockApolloClient;

    beforeEach(() => {
      client = createMockClient();
      ApolloClient.mockImplementation(() => client);
    });
    test('should return a graphql client', () => {
      expect(getGraphqlClient()).toStrictEqual(client);
    });
  });
});
