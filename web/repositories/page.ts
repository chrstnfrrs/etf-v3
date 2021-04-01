import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  AllPagesDocument,
  BlogPageDocument,
  ContactPageDocument,
  HomePageDocument,
  PageDocument,
  Pages,
  PageContact,
} from '../graphql/generated';

const getBlogPage = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<PageContact> => {
  const { data } = await client.query({
    query: BlogPageDocument,
  });

  return data.allPageBlog[0];
};

const getContactPage = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<PageContact> => {
  const { data } = await client.query({
    query: ContactPageDocument,
  });

  return data.allPageContact[0];
};

const getHomePage = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Pages> => {
  const { data } = await client.query({
    query: HomePageDocument,
  });

  return data.allPages[0];
};

const getPages = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Pages[]> => {
  const { data } = await client.query({
    query: AllPagesDocument,
  });

  return data.allPages;
};

const getPage = async (
  client: ApolloClient<NormalizedCacheObject>,
  route: string,
): Promise<Pages> => {
  const { data } = await client.query({
    query: PageDocument,
    variables: {
      route,
    },
  });

  return data.allPages[0];
};

export { getBlogPage, getContactPage, getHomePage, getPage, getPages };
