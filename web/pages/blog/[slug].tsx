import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { format } from 'date-fns';

import withLayout from '../../components/app/with-layout';
import { getGraphqlClient } from '../../graphql/utils';
import { getLinks } from '../../repositories/menu';
import { getPost, getAllPostSlugs } from '../../repositories/posts';
import { Post } from '../../graphql/generated';
import { IPostPageProps } from '../../types/app';
import {
  PlaceholderContainer,
  PlaceholderH1,
  PlaceholderH3,
} from '../../components/placeholders';
import { PlaceholderBlock } from '../../components/cookbook/block';

const PostPage: React.FC<IPostPageProps> = ({ page, ...props }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta content={page.title as string} key='title' property='og:title' />
        <meta content={page.description as string} name='description' />
      </Head>
      <PlaceholderContainer>
        <Image
          alt={page.mainImage?.alt as string}
          height='100vw'
          layout='intrinsic'
          src={page.mainImage?.asset?.url as string}
          width='100vw'
        />
        <PlaceholderH1>{page.title}</PlaceholderH1>
        <PlaceholderH3>
          {format(new Date(page.publishedAt), 'MMM do, yyyy')}
        </PlaceholderH3>
        <PlaceholderBlock content={page.bodyRaw} />
      </PlaceholderContainer>
    </>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const client = getGraphqlClient();

  const allSlugs = await getAllPostSlugs(client);

  const paths = allSlugs
    .filter((post: Post) => post.slug?.current?.length)
    .map((post: Post) => ({
      params: {
        slug: post.slug?.current as string,
      },
    }));

  return {
    fallback: false, // See the "fallback" section below
    paths,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getGraphqlClient();

  const slug = `${(params?.slug as string) || ''}`;

  const post = await getPost(client, slug);

  return {
    props: {
      page: post,
      ...(await getLinks(client)),
    },
  };
};

export { getStaticPaths, getStaticProps };

export default withLayout(PostPage);
