import * as Codegen from '../graphql/generated';

const getHomePage = async (client) => {
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
