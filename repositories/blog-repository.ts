import * as Apollo from '@apollo/client';

import * as Codegen from '../graphql/generated';

interface IRepoParams {
  client: Apollo.ApolloClient<Apollo.NormalizedCacheObject>;
}
type RepoFn = (params: IRepoParams) => Promise<any>;

const getBlogInformation: RepoFn = async ({ client }) => {
  const {
    data: {
      allPageBlog: [page],
    },
  } = await client.query({
    query: Codegen.BlogPageDocument,
  });

  return page;
};

const getAllBlogPosts: RepoFn = async ({ client }) => {
  const {
    data: { allPost },
  } = await client.query({
    query: Codegen.AllPostPreviewDocument,
  });

  return allPost;
};

const getAllPostSlugs: RepoFn = async ({ client }) => {
  const {
    data: { allPost },
  } = await client.query({
    query: Codegen.AllSlugsDocument,
  });

  const paths = allPost
    .filter((post: Codegen.Post) => post.slug?.current?.length)
    .map((post: Codegen.Post) => ({
      params: {
        slug: post.slug?.current as string,
      },
    }));

  return paths;
};

interface IGetBlogBySlugParams extends IRepoParams {
  slug: string;
}
type GetBlogPostBySlug = (params: IGetBlogBySlugParams) => Promise<any>;

const getBlogPostBySlug: GetBlogPostBySlug = async ({ client, slug }) => {
  const {
    data: {
      allPost: [post],
    },
  } = await client.query({
    query: Codegen.AllPostPostDocument,
    variables: {
      slug,
    },
  });

  const page = {
    description: post.preview || 'ETF Blog Post',
    ...post,
  };

  return page;
};

export {
  getBlogInformation,
  getAllBlogPosts,
  getAllPostSlugs,
  getBlogPostBySlug,
};
