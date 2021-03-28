import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import Chance from 'chance';

import { getStaticPaths, getStaticProps } from '../../pages/[slug]';
import * as GraphqlUtils from '../../graphql/utils';
import * as MenuRepository from '../../repositories/menu';
import * as PageRepository from '../../repositories/page';
import { Pages } from '../../graphql/generated';
import { ALLOW_ANY, MenuLinks, TStaticPagePaths } from '../../types/app';
import {
  createRandomGetStaticPathsContext,
  createRandomGetStaticPropsContextForPage,
} from '../model-factories/next';
import { createRandomPage } from '../model-factories/page';
import {
  createRandomLink,
  createRandomLinkOptions,
} from '../model-factories/menu';

jest.mock('../../graphql/utils');
jest.mock('../../repositories/menu');
jest.mock('../../repositories/page');

const chance = new Chance();
const { getGraphqlClient } = GraphqlUtils as jest.Mocked<typeof GraphqlUtils>;
const { getPage, getPages } = PageRepository as jest.Mocked<
  typeof PageRepository
>;
const { getLinks } = MenuRepository as jest.Mocked<typeof MenuRepository>;

describe('[page]', () => {
  afterEach(jest.resetAllMocks);
  describe('getStaticPaths', () => {
    let context: GetStaticPathsContext,
      client: ApolloClient<NormalizedCacheObject>,
      pages: Pages[];

    beforeEach(() => {
      client = createMockClient();
      context = createRandomGetStaticPathsContext();
      getGraphqlClient.mockReturnValue(client);
      pages = chance.n(createRandomPage, chance.d6());
      getPages.mockResolvedValue(pages);
    });
    test('should create a graphql client', async () => {
      await getStaticPaths(context);

      expect(getGraphqlClient).toHaveBeenCalledTimes(1);
      expect(getGraphqlClient).toHaveBeenCalledWith();
    });

    test('should get a list of pages', async () => {
      await getStaticPaths(context);

      expect(getPages).toHaveBeenCalledTimes(1);
      expect(getPages).toHaveBeenCalledWith(client);
    });

    test('should return static paths with a path list containing all pages', async () => {
      const result = await getStaticPaths(context);

      const expectedPaths: TStaticPagePaths = [];

      pages.forEach((page: Pages) =>
        expectedPaths.push({ params: { slug: page.route as string } }),
      );

      const expectedStaticPaths = {
        fallback: false,
        paths: expectedPaths,
      };

      expect(result).toStrictEqual(expectedStaticPaths);
    });
    test('should filter invalid routs', async () => {
      pages.push(createRandomPage({ route: undefined }));
      getPages.mockResolvedValue(pages);

      const result = await getStaticPaths(context);

      const expectedPaths: TStaticPagePaths = [];

      pages.forEach((page: Pages) => {
        if (page.route) {
          expectedPaths.push({ params: { slug: page.route as string } });
        }
      });

      const expectedStaticPaths = {
        fallback: false,
        paths: expectedPaths,
      };

      expect(result).toStrictEqual(expectedStaticPaths);
    });
  });

  describe('getStaticProps', () => {
    let context: GetStaticPropsContext,
      client: ApolloClient<NormalizedCacheObject>,
      page: Pages,
      menuLinks: MenuLinks,
      result: ALLOW_ANY;

    beforeEach(() => {
      client = createMockClient();
      context = createRandomGetStaticPropsContextForPage();
      getGraphqlClient.mockReturnValue(client);
      page = createRandomPage();
      getPage.mockResolvedValue(page);
      menuLinks = {
        navigationLinks: chance.n(createRandomLink, chance.d4()),
        navigationOptions: createRandomLinkOptions(),
      };
      getLinks.mockResolvedValue(menuLinks);
    });

    describe('when params has a page', () => {
      beforeEach(async () => {
        result = await getStaticProps(context);
      });
      test('should create a graphql client', () => {
        expect(getGraphqlClient).toHaveBeenCalledTimes(1);
        expect(getGraphqlClient).toHaveBeenCalledWith();
      });
      test('should get a page', () => {
        expect(getPage).toHaveBeenCalledTimes(1);
        expect(getPage).toHaveBeenCalledWith(client, `${context.params?.slug}`);
      });
      test('should get menu links', () => {
        expect(getLinks).toHaveBeenCalledTimes(1);
        expect(getLinks).toHaveBeenCalledWith(client);
      });
      test('should return page props', () => {
        expect(result).toStrictEqual({
          props: {
            page,
            sections: page.sections,
            ...menuLinks,
          },
        });
      });
    });

    describe('when params is undefined', () => {
      beforeEach(async () => {
        context.params = undefined;
        result = await getStaticProps(context);
      });
      test('should create a graphql client', () => {
        expect(getGraphqlClient).toHaveBeenCalledTimes(1);
        expect(getGraphqlClient).toHaveBeenCalledWith();
      });
      test('should get a page', () => {
        expect(getPage).toHaveBeenCalledTimes(1);
        expect(getPage).toHaveBeenCalledWith(client, '');
      });
      test('should get menu links', () => {
        expect(getLinks).toHaveBeenCalledTimes(1);
        expect(getLinks).toHaveBeenCalledWith(client);
      });
      test('should return page props', () => {
        expect(result).toStrictEqual({
          props: {
            page,
            sections: page.sections,
            ...menuLinks,
          },
        });
      });
    });
  });
});
