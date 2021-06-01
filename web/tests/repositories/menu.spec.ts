import * as Apollo from '@apollo/client';
import Chance from 'chance';

import * as MenuRepository from '../../repositories/menu';
import * as Codegen from '../../graphql/generated';
import * as Types from '../../types/index.d';
import * as ApolloFactory from '../model-factories/apollo';
import * as AppFactory from '../model-factories/app';

const chance = new Chance();

describe('Given a repository to fetch menu options', () => {
  describe('When trying to fetch menu options', () => {
    let navigationLinks: Types.App.Link[],
      client: Types.Apollo.Client,
      result: Types.AllowAny;

    beforeEach(async () => {
      navigationLinks = chance.n(AppFactory.createLink, chance.d4());
      const query = jest.fn().mockReturnValue({
        data: {
          allSettings: [
            {
              navigation: {
                navigationLinks,
              },
            },
          ],
        },
      });

      client = ApolloFactory.createClient(query);

      result = await MenuRepository.getLinks(
        client as Apollo.ApolloClient<Apollo.NormalizedCacheObject>,
      );
    });
    test('Then should fetch links', () => {
      expect(client.query).toHaveBeenCalledTimes(1);
      expect(client.query).toHaveBeenCalledWith({
        query: Codegen.SettingsDocument,
      });
    });
    test('Then should return links', () => {
      expect(result).toStrictEqual({
        navigationLinks,
      });
    });
  });
});
