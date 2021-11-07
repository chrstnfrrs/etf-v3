import * as React from 'react';
import { GetServerSideProps } from 'next';

import * as Types from '../../types/index.d';
import * as GraphqlClient from '../../graphql/graphql-client';
import * as BlogRepository from '../../repositories/blog-repository';
import * as MenuRepository from '../../repositories/menu';
import { ETFLayout } from '../../components/etf/etf-layout';
import { ETFPost } from '../../components/etf/etf-post';

type Page = {
  description: string;
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
  post: Page;
  menu: Types.AllowAny;
};

type ServerSideProps = {
  props: Props;
};

const PostPage: React.FC<Props> = ({ menu, post }) => {
  return (
    <ETFLayout menu={menu} page={post}>
      <ETFPost post={post} />
    </ETFLayout>
  );
};

// const getStaticPaths: GetStaticPaths = async () => {
//   const client = GraphqlClient.get();

//   const paths = await BlogRepository.getAllPostSlugs({ client });

//   return {
//     fallback: false,
//     paths,
//   };
// };

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const client = GraphqlClient.get();

  const slug = `${(params?.slug as string) || ''}`;

  const post = await BlogRepository.getBlogPostBySlug({
    client,
    slug,
  });

  return {
    props: {
      menu: await MenuRepository.getLinks(client),
      post,
    },
  };
};

export { getServerSideProps };
export type { ServerSideProps, Props, Page };
export default PostPage;
