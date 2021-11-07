import React from 'react';
// import styled from '@emotion/styled';

import { ETFLayout } from '../components/etf/etf-layout';
import { PageSerializer } from '../components/sanity/component-serializer';
// Static Prop Imports
import * as GraphqlClient from '../graphql/graphql-client';
import * as HomePageRepository from '../repositories/home-repository';
import * as MenuRepository from '../repositories/menu';

const BlogPage = ({ menu, page }) => {
  return (
    <ETFLayout menu={menu} page={page}>
      <PageSerializer sections={page.sections} />
    </ETFLayout>
  );
};

const getStaticProps = async () => {
  const client = GraphqlClient.get();
  const page = await HomePageRepository.getHomePage({ client });
  const menu = await MenuRepository.getLinks(client);

  return {
    props: {
      menu,
      page,
    },
  };
};

export { getStaticProps };
// export type { StaticProps, Props, Page };
export default BlogPage;
