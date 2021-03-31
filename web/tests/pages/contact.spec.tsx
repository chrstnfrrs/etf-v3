import * as React from 'react';
import { GetStaticPropsContext } from 'next';
import { createMockClient } from 'mock-apollo-client';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import Chance from 'chance';
import '@testing-library/jest-dom';
import * as RTL from '@testing-library/react';

import ContactPage, { getStaticProps } from '../../pages/contact';
import { createRandomGetStaticPropsContextForPage } from '../model-factories/next';
import {
  createRandomLink,
  createRandomLinkOptions,
} from '../model-factories/menu';
import { createRandomContactPage } from '../model-factories/page';
import { ALLOW_ANY, MenuLinks } from '../../types/app';
import { PageContact } from '../../graphql/generated';
import * as GraphqlUtils from '../../graphql/utils';
import * as PageRepository from '../../repositories/page';
import * as MenuRepository from '../../repositories/menu';

jest.mock('../../graphql/utils');
jest.mock('../../repositories/page');
jest.mock('../../repositories/menu');

const chance = new Chance();

const { getGraphqlClient } = GraphqlUtils as jest.Mocked<typeof GraphqlUtils>;
const { getContactPage } = PageRepository as jest.Mocked<typeof PageRepository>;
const { getLinks } = MenuRepository as jest.Mocked<typeof MenuRepository>;

describe('contact page', () => {
  afterEach(jest.resetAllMocks);
  describe('getStaticProps', () => {
    let result: ALLOW_ANY,
      context: GetStaticPropsContext,
      client: ApolloClient<NormalizedCacheObject>,
      page: PageContact,
      menuLinks: MenuLinks;

    beforeEach(async () => {
      context = createRandomGetStaticPropsContextForPage();
      client = createMockClient();
      getGraphqlClient.mockReturnValue(client);
      page = createRandomContactPage();
      getContactPage.mockResolvedValue(page);
      menuLinks = {
        navigationLinks: chance.n(createRandomLink, chance.d4()),
        navigationOptions: createRandomLinkOptions(),
      };
      getLinks.mockResolvedValue(menuLinks);
      result = await getStaticProps(context);
    });
    test('should get graphql cliend', () => {
      expect(getGraphqlClient).toHaveBeenCalledTimes(1);
      expect(getGraphqlClient).toHaveBeenCalledWith();
    });
    test('should get contact page information', () => {
      expect(getContactPage).toHaveBeenCalledTimes(1);
      expect(getContactPage).toHaveBeenCalledWith(client);
    });
    test('should get links', () => {
      expect(getLinks).toHaveBeenCalledTimes(1);
      expect(getLinks).toHaveBeenCalledWith(client);
    });
    test('should return page information and links', () => {
      expect(result).toStrictEqual({
        props: {
          page,
          ...menuLinks,
        },
      });
    });
  });
  describe('ContactPage', () => {
    let props: ALLOW_ANY;

    beforeEach(() => {
      props = {
        navigationLinks: chance.n(createRandomLink, chance.d4()),
        navigationOptions: createRandomLinkOptions(),
        page: createRandomContactPage(),
      };
    });
    test('do the thing', () => {
      const result = RTL.render(<ContactPage {...props} />);

      expect(result).toBeDefined();
    });
  });
});
