import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import {
  AllPostPreviewDocument,
  AllPostPostDocument,
  AllSlugsDocument,
  Post,
} from '../graphql/generated';

const getAllPosts = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Post[]> => {
  const { data } = await client.query({
    query: AllPostPreviewDocument,
  });

  return data.allPost;
};

const getAllPostSlugs = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Post[]> => {
  const { data } = await client.query({
    query: AllSlugsDocument,
  });

  return data.allPost;
};

const getPost = async (
  client: ApolloClient<NormalizedCacheObject>,
  slug: string,
): Promise<Post[]> => {
  const { data } = await client.query({
    query: AllPostPostDocument,
    variables: {
      slug,
    },
  });

  return data.allPost[0];
};

export { getAllPosts, getAllPostSlugs, getPost };
