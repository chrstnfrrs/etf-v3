import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import withLayout from '../../components/app/with-layout';
import { getGraphqlClient } from '../../graphql/utils';
import { Post } from '../../graphql/generated';
import { getLinks } from '../../repositories/menu';
import { getBlogPage } from '../../repositories/page';
import { getAllPosts } from '../../repositories/posts';
import { IBlogPageProps } from '../../types/app';
import {
  PlaceholderContainer,
  PlaceholderH1,
  PlaceholderCard,
  PlaceholderGrid,
  PlaceholderStrong,
  PlaceholderLink,
} from '../../components/placeholders';
import { PlaceholderBlock } from '../../components/cookbook/block';

const BlogPage: React.FC<IBlogPageProps> = ({ page, posts, ...props }) => {
  // eslint-disable-next-line no-console
  console.log('props', props);

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta content={page.title as string} key='title' property='og:title' />
        <meta content={page.description as string} name='description' />
      </Head>
      <PlaceholderContainer>
        <PlaceholderH1>{page.pageHeading as string}</PlaceholderH1>
        {page.showPosts && (
          <PlaceholderGrid>
            {posts.map((post: Post) => (
              <PlaceholderLink
                href={`blog/${post.slug?.current}`}
                key={post._key}
              >
                <PlaceholderCard>
                  <Image
                    alt={post.mainImage?.alt as string}
                    height='100vw'
                    layout='intrinsic'
                    src={post.mainImage?.asset?.url as string}
                    width='100vw'
                  />
                  <PlaceholderStrong>{post.title}</PlaceholderStrong>
                  <PlaceholderBlock content={post.previewRaw} />
                </PlaceholderCard>
              </PlaceholderLink>
            ))}
          </PlaceholderGrid>
        )}
      </PlaceholderContainer>
    </>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();

  const page = await getBlogPage(client);
  const posts = await getAllPosts(client);

  return {
    props: {
      page,
      posts,
      ...(await getLinks(client)),
    },
  };
};

export { getStaticProps };

export default withLayout(BlogPage);
