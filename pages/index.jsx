/* eslint-disable react/jsx-pascal-case */
import React from 'react';
// import styled from '@emotion/styled';

import { ETFLayout } from '../components/etf/etf-layout';
import { PageSerializer } from '../components/sanity/component-serializer';
// Static Prop Imports
import * as GraphqlClient from '../graphql/graphql-client';
import * as MenuRepository from '../repositories/menu';
import { HomePageDocument } from '../graphql/generated';

const BlogPage = ({ page, data, ...props }) => {
  return (
    <ETFLayout page={page} {...props}>
      <PageSerializer data={data} sections={page.sections} />
    </ETFLayout>
  );
};

const getStaticProps = async () => {
  const client = GraphqlClient.get();

  // Fetch page info
  const {
    data: { allHomePage },
  } = await client.query({
    query: HomePageDocument,
  });

  const [page] = allHomePage;

  console.log('page', page);
  console.log('page sections', page.sections);

  return {
    props: {
      data: null,
      menu: await MenuRepository.getLinks(client),
      page,
      // posts: allPost,
    },
  };
};

export { getStaticProps };
// export type { StaticProps, Props, Page };
export default BlogPage;
