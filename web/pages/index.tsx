import { GetStaticProps } from 'next';

import withLayout from '../components/app/with-layout';
import { Page } from '../components/app/page';
import { getGraphqlClient } from '../graphql/utils';
import { getLinks } from '../repositories/menu';
import { getHomePage } from '../repositories/page';

const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();

  const page = await getHomePage(client);

  return {
    props: {
      page,
      sections: page.sections,
      ...(await getLinks(client)),
    },
  };
};

export { getStaticProps };

export default withLayout(Page);
