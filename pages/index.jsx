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

const getServerSideProps = async () => {
  const client = GraphqlClient.get();
  const [page, menu] = await Promise.all([
    HomePageRepository.getHomePage({ client }),
    MenuRepository.getLinks(client),
  ]);

  return {
    props: {
      menu,
      page,
    },
  };
};

export { getServerSideProps };
// export type { ServerSideProps, Props, Page };
export default BlogPage;
