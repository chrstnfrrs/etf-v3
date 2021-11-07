import * as Apollo from '@apollo/client';

import * as Codegen from '../graphql/generated';

interface IRepoParams {
  client: Apollo.ApolloClient<Apollo.NormalizedCacheObject>;
}
type RepoFn = (params: IRepoParams) => Promise<any>;

const getHomePage: RepoFn = async ({ client }) => {
  // Fetch page info
  const {
    data: { allHomePage },
  } = await client.query({
    query: Codegen.HomePageDocument,
  });

  // First page of collection is home
  const [page] = allHomePage;

  return page;
};

export { getHomePage };
