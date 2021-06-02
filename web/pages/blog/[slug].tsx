import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import * as GraphqlClient from '../../graphql/graphql-client';
import * as Codegen from '../../graphql/generated';
import * as MenuRepository from '../../repositories/menu';

type Page = {
  title: string;
};

type Props = {
  page: Page;
};

type StaticProps = {
  props: Props;
};

const PostPage: React.FC<Props> = () => null;
//   return (
//     <>
//       <Head>
//         <title>{page.title}</title>
//         <meta content={page.title as string} key='title' property='og:title' />
//         <meta content={page.description as string} name='description' />
//       </Head>
//       <PlaceholderContainer>
//         <Image
//           alt={page.mainImage?.alt as string}
//           height='100vw'
//           layout='intrinsic'
//           src={page.mainImage?.asset?.url as string}
//           width='100vw'
//         />
//         <PlaceholderH1>{page.title}</PlaceholderH1>
//         <PlaceholderH3>
//           {format(new Date(page.publishedAt), 'MMM do, yyyy')}
//         </PlaceholderH3>
//         <PlaceholderBlock content={page.bodyRaw} />
//       </PlaceholderContainer>
//     </>
//   );
// };

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
      allPost: [page],
    },
  } = await client.query({
    query: Codegen.AllPostPostDocument,
    variables: {
      slug,
    },
  });

  return {
    props: {
      page,
      ...(await MenuRepository.getLinks(client)),
    },
  };
};

export { getStaticPaths, getStaticProps };
export type { StaticProps, Props, Page };
export default PostPage;
