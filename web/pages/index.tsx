import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styled from '@emotion/styled';
// import { AGrid, ACard, ASpacer, ABox } from 'aspire-components-react';

import { AllowAny } from '../types/index.d';
import { ETFLayout } from '../components/etf/etf-layout';
// Static Prop Imports
import * as GraphqlClient from '../graphql/graphql-client';
import * as Codegen from '../graphql/generated';
import * as MenuRepository from '../repositories/menu';

const ETFHeroContainer = styled.div`
  display: flex;
  margin: -4rem -8rem;
  position: relative;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 70px);
`;

const ETFHeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const AH1 = styled.h1`
  z-index: 5;
  position: relative;
  padding-left: 4rem;
  margin-top: -4rem;
`;

const ETFHero: AllowAny = (props: AllowAny) => {
  console.log('hero props', props);

  return (
    <ETFHeroContainer>
      <AH1>{props.heading}</AH1>
      <ETFHeroImageContainer>
        {/* @ts-ignore */}
        <Image layout='fill' src={props.heroImage.asset.url} />
      </ETFHeroImageContainer>
    </ETFHeroContainer>
  );
};

const BlogPage: React.FC<AllowAny> = ({ page, ...props }) => {
  console.log('page', page.sections);

  return (
    <ETFLayout page={page} {...props}>
      {page.sections.map((section: AllowAny) => {
        if (section.__typename === 'Hero') {
          return <ETFHero {...section} />;
        }
      })}
    </ETFLayout>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const client = GraphqlClient.get();

  // Fetch page info
  const {
    data: {
      allPages: [page],
    },
  } = await client.query({
    query: Codegen.HomePageDocument,
  });

  return {
    props: {
      menu: await MenuRepository.getLinks(client),
      page,
      // posts: allPost,
    },
  };
};

export { getStaticProps };
// export type { StaticProps, Props, Page };
export default BlogPage;
