import { createMockClient, MockApolloClient } from 'mock-apollo-client';
import Chance from 'chance';

import {
  Links,
  NavigationOptions,
  SettingsDocument,
} from '../../graphql/generated';
import { getLinks } from '../../repositories/menu';
import {
  createRandomLink,
  createRandomLinkOptions,
} from '../model-factories/menu';

const chance = new Chance();

describe('menu', () => {
  let client: MockApolloClient;

  beforeEach(() => {
    client = createMockClient();
  });
  describe('getPages', () => {
    let navigationLinks: Links[], navigationOptions: NavigationOptions;

    beforeEach(() => {
      navigationLinks = chance.n(createRandomLink, chance.d4());
      navigationOptions = createRandomLinkOptions();

      client.setRequestHandler(SettingsDocument, () =>
        Promise.resolve({
          data: {
            allSettings: [
              {
                navigation: {
                  navigationLinks,
                  navigationOptions,
                },
              },
            ],
          },
        }),
      );
    });
    test('should fetch all pages', async () => {
      const result = await getLinks(client);

      expect(result).toStrictEqual({
        navigationLinks,
        navigationOptions,
      });
    });
  });
});
