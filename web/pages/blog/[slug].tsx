import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from '@emotion/styled';
import * as DateFns from 'date-fns';

import * as Types from '../../types/index.d';
import * as GraphqlClient from '../../graphql/graphql-client';
import * as Codegen from '../../graphql/generated';
import * as MenuRepository from '../../repositories/menu';
import { PlaceholderBlock } from '../../components/cookbook/block';
import { ETFLayout } from '../../components/etf/etf-layout';

type Page = {
  title: string;
  publishedAt: Date;
  mainImage: {
    alt: string;
    asset: {
      url: string;
    };
  };
  bodyRaw: Types.Sanity.Block[];
};

type Props = {
  page: Page;
};

type StaticProps = {
  props: Props;
};

const AH1 = styled.h1``;
const AH3 = styled.h3``;
const AImage = styled.img`
  border-radius: 4px 4px 0 0;
  height: 35vh !important;
`;

const PostPage: React.FC<Props> = (props) => {
  return (
    <ETFLayout {...props}>
      <AImage
        alt={props.page.mainImage.alt}
        className='a-image'
        src={props.page.mainImage.asset?.url}
      />
      <AH1>{props.page.title}</AH1>
      <AH3>
        {DateFns.format(new Date(props.page.publishedAt), 'MMM do, yyyy')}
      </AH3>
      <PlaceholderBlock content={props.page.bodyRaw} />
    </ETFLayout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const client = GraphqlClient.get();

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

  return {
    fallback: false,
    paths,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = GraphqlClient.get();

  const slug = `${(params?.slug as string) || ''}`;

  const {
    data: {
      allPost: [pageReal],
    },
  } = await client.query({
    query: Codegen.AllPostPostDocument,
    variables: {
      slug,
    },
  });

  const page = {
    description: 'asdf',
    title: 'asdf',
    ...pageReal,
  };

  return {
    props: {
      menu: await MenuRepository.getLinks(client),
      page,
    },
  };
};

export { getStaticPaths, getStaticProps };
export type { StaticProps, Props, Page };
export default PostPage;
