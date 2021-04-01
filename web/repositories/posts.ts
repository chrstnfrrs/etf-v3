import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import { AllPostPreviewDocument, Post } from '../graphql/generated';

const getAllPosts = async (
  client: ApolloClient<NormalizedCacheObject>,
): Promise<Promise<Post>[]> => {
  const { data } = await client.query({
    query: AllPostPreviewDocument,
  });

  return data.allPost;
};

export { getAllPosts };
