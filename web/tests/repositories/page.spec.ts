import { createMockClient, MockApolloClient } from 'mock-apollo-client';
import Chance from 'chance';

import {
  AllPagesDocument,
  HomePageDocument,
  PageDocument,
  Pages,
} from '../../graphql/generated';
import { getHomePage, getPage, getPages } from '../../repositories/page';
import { createRandomPage } from '../model-factories/page';

const chance = new Chance();

describe('page', () => {
  let client: MockApolloClient;

  beforeEach(() => {
    client = createMockClient();
  });
  afterEach(jest.resetAllMocks);
  describe('getHomePage', () => {
    let page: Pages;

    beforeEach(() => {
      page = createRandomPage();
      client.setRequestHandler(HomePageDocument, () =>
        Promise.resolve({ data: { allPages: [page] } }),
      );
    });
    test('should fetch all pages', async () => {
      const result = await getHomePage(client);

      expect(result).toStrictEqual(page);
    });
  });
  describe('getPages', () => {
    let pages: Pages[];

    beforeEach(() => {
      pages = chance.n(createRandomPage, chance.d6());
      client.setRequestHandler(AllPagesDocument, () =>
        Promise.resolve({ data: { allPages: pages } }),
      );
    });
    test('should fetch all pages', async () => {
      const result = await getPages(client);

      expect(result).toStrictEqual(pages);
    });
  });

  describe('getPage', () => {
    let page: Pages, route: string;

    beforeEach(() => {
      route = chance.string();
      page = createRandomPage({
        route,
      });
      client.setRequestHandler(PageDocument, () =>
        Promise.resolve({ data: { allPages: [page] } }),
      );
    });
    test('should fetch all pages', async () => {
      const result = await getPage(client, route);

      expect(result).toStrictEqual(page);
    });
  });
});
