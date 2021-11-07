import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as RTL from '@testing-library/react';
import '@testing-library/jest-dom';
import Chance from 'chance';

// UI Imports
import * as ContactPage from '../../pages/contact';
import * as Types from '../../types/index.d';
import * as AppFactory from '../model-factories/app';
import * as SanityFactory from '../model-factories/sanity';
// Static Prop Imports
import * as GraphqlClient from '../../graphql/graphql-client';
import * as MenuRepository from '../../repositories/menu';
import * as Codegen from '../../graphql/generated';
import * as ApolloFactory from '../model-factories/apollo';

jest.mock('../../graphql/graphql-client');
jest.mock('../../repositories/menu');

const chance = new Chance();

const { default: Page } = ContactPage;
const MockGraphqlClient = GraphqlClient as jest.Mocked<typeof GraphqlClient>;
const MockedMenuRepository = MenuRepository as jest.Mocked<
  typeof MenuRepository
>;

const createRandomContactPage = (
  callToActionRaw: Types.Sanity.Block[],
  links: Types.App.Link[],
) => ({
  callToActionRaw,
  contactForm: {
    submit: chance.string(),
  },
  description: chance.string(),
  links,
  title: chance.string(),
});

describe('Given a contact page', () => {
  let props: ContactPage.Props,
    links: Types.App.Link[],
    menu: Types.App.Menu,
    callToActionRaw: Types.Sanity.Block[];

  beforeEach(() => {
    // Setup Links
    links = chance.n(AppFactory.createLink, chance.d6());

    // Setup Menu for Nav
    menu = AppFactory.createMenu();

    // Setup Sanity Block Content
    callToActionRaw = chance.n(SanityFactory.createBlock, chance.d4());

    props = {
      menu,
      page: createRandomContactPage(callToActionRaw, links),
    };
  });

  afterEach(jest.resetAllMocks);
  describe('When rendering the page', () => {
    beforeEach(() => {
      RTL.render(<Page {...props} />);
    });
    test('Then should render contact links', () => {
      links
        .filter((link: Types.App.Link) => link.text)
        .forEach((link: Types.App.Link) => {
          expect(RTL.screen.getByText(link.text)).toBeVisible();
        });
    });
    test('Then should render block content', () => {
      callToActionRaw.forEach((block: Types.Sanity.Block) => {
        block.children.forEach((child: string) => {
          const list = RTL.screen.queryAllByText(child);

          list.forEach((item: Types.AllowAny) => {
            expect(item).toBeVisible();
          });
        });
      });
    });
    test('Then should render a contact form', () => {
      expect(RTL.screen.getByTestId('contact-form')).toBeVisible();
    });
  });
  describe('When fetching data for the page', () => {
    let client: Types.Apollo.Client,
      page: ContactPage.Page,
      result: ContactPage.ServerSideProps,
      expectedResult: ContactPage.ServerSideProps;

    beforeEach(async () => {
      const query = jest.fn().mockReturnValue({
        data: {
          allPageContact: [page],
        },
      });

      client = ApolloFactory.createClient(query);

      MockGraphqlClient.get.mockReturnValue(
        client as Apollo.ApolloClient<Apollo.NormalizedCacheObject>,
      );
      MockedMenuRepository.getLinks.mockResolvedValue(menu);

      expectedResult = {
        props: {
          menu,
          page,
        },
      };

      result = (await ContactPage.getServerSideProps(
        {},
      )) as ContactPage.ServerSideProps;
    });
    test('Then should get a graphql client', () => {
      expect(MockGraphqlClient.get).toHaveBeenCalledTimes(1);
      expect(MockGraphqlClient.get).toHaveBeenCalledWith();
    });

    test('Then should fetch data', () => {
      expect(client.query).toHaveBeenCalledTimes(1);
      expect(client.query).toHaveBeenCalledWith({
        query: Codegen.ContactPageDocument,
      });
    });

    test('Then should fetch menu links', () => {
      expect(MockedMenuRepository.getLinks).toHaveBeenCalledTimes(1);
      expect(MockedMenuRepository.getLinks).toHaveBeenCalledWith(client);
    });

    test('Then should return expected page props', () => {
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
