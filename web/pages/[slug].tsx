import { GetStaticPaths, GetStaticProps } from 'next';

import withLayout from '../components/app/with-layout';
import { Page } from '../components/app/page';
import { getGraphqlClient } from '../graphql/utils';
import { getLinks } from '../repositories/menu';
import { getPage, getPages } from '../repositories/page';
import { Pages } from '../graphql/generated';

const getStaticPaths: GetStaticPaths = async () => {
  const client = getGraphqlClient();

  const pages = await getPages(client);

  const paths = pages
    .filter((page) => page.route?.length)
    .map((page: Pages) => ({
      params: {
        slug: page.route as string,
      },
    }));

  return {
    fallback: false, // See the "fallback" section below
    paths,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getGraphqlClient();

  const route = `${(params?.slug as string) || ''}`;

  const page = await getPage(client, route);

  return {
    props: {
      page,
      sections: page.sections,
      ...(await getLinks(client)),
    },
  };
};

export { getStaticPaths, getStaticProps };

export default withLayout(Page);
