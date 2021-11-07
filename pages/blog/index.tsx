import React from 'react';
import { GetStaticProps } from 'next';
import styled from '@emotion/styled';
import { AGrid, ACard, ABox } from 'aspire-components-react';
import Link from 'next/link';

import { AllowAny } from '../../types/index.d';
import { ETFLayout } from '../../components/etf/etf-layout';
import {
  StyledHeading,
  StyledH3,
  StyledImage,
  StyledSpacer,
} from '../../components/cookbook/styled';
// Static Prop Imports
import * as GraphqlClient from '../../graphql/graphql-client';
import * as BlogRepository from '../../repositories/blog-repository';
import * as MenuRepository from '../../repositories/menu';

type Post = {
  _key: string;
  slug: {
    current: string;
  };
  mainImage: {
    alt: string;
    asset: {
      url: string;
    };
  };
};

type Page = {
  title: string;
  description: string;
  pageHeading: string;
};

type Props = {
  page: Page;
  menu: AllowAny;
  posts: Post[];
};

type StaticProps = {
  props: Props;
};

const ACardStyles = {
  border: 'none',
  borderRadius: '1rem 0.25rem 1rem 0.25rem',
};

const BlogPage: React.FC<Props> = ({ menu, page, posts }) => (
  <ETFLayout menu={menu} page={page}>
    <div>
      <StyledHeading>{page.pageHeading}</StyledHeading>
      <StyledSpacer space='1rem' spaceMobile='0.5rem' />
      {posts.length ? (
        <AGrid gap='8'>
          {posts.map((post: AllowAny) => (
            <Link href={`blog/${post.slug.current}`} key={post._id}>
              <ACard height='full' padding='0' style={ACardStyles}>
                <StyledImage
                  alt={post.mainImage.alt}
                  src={post.mainImage.asset.url}
                />
                <ABox padding='4 0b'>
                  <StyledH3>{post.title}</StyledH3>
                </ABox>
              </ACard>
            </Link>
          ))}
        </AGrid>
      ) : (
        <p>{'No Posts'}</p>
      )}
    </div>
  </ETFLayout>
);

const getStaticProps: GetStaticProps = async () => {
  const client = GraphqlClient.get();

  const [menu, page, posts] = await Promise.all([
    MenuRepository.getLinks(client),
    BlogRepository.getBlogInformation({ client }),
    BlogRepository.getAllBlogPosts({ client }),
  ]);

  return {
    props: {
      menu,
      page,
      posts,
    },
  };
};

export { getStaticProps };
export type { StaticProps, Props, Page };
export default BlogPage;
