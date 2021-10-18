import React from 'react';
import { GetStaticProps } from 'next';
import styled from '@emotion/styled';
import { AGrid, ACard, ASpacer, ABox } from 'aspire-components-react';

import { AllowAny } from '../../types/index.d';
import { ETFLayout } from '../../components/etf/etf-layout';
// Static Prop Imports
import * as GraphqlClient from '../../graphql/graphql-client';
import * as Codegen from '../../graphql/generated';
import * as MenuRepository from '../../repositories/menu';

const AH1 = styled.h1``;
const ALink = styled.a``;
const AStrong = styled.strong``;
const AText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
const AImage = styled.img`
  border-radius: 4px 4px 0 0;
`;

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

const preview = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet convallis nunc, ut convallis dui tincidunt at. Quisque dignissim, nisi ac eleifend egestas, urna ligula rutrum lectus, eget faucibus tortor tortor non dolor. Vestibulum sed massa ex. Maecenas luctus sapien ac nisl lacinia convallis. In a metus vestibulum, pharetra sem eget, rhoncus mauris. Mauris ipsum nulla, dignissim ac elit quis, blandit consequat quam. Nunc sollicitudin ligula a velit ultricies malesuada.

Sed malesuada elit et egestas fermentum. Nulla sit amet erat non sem ultricies ultricies. Praesent hendrerit elit vitae tempus ornare. Vivamus pharetra facilisis felis non elementum. Donec eget odio pretium, efficitur tellus at, venenatis velit. Fusce vulputate vestibulum orci, nec egestas ante fringilla consequat. Duis a libero vitae sem porta semper. Praesent pharetra consectetur sapien, ut varius ante tempus a. Donec viverra non risus ut pellentesque. Donec eu arcu a risus tempus laoreet. Donec a tincidunt neque. Nulla vel aliquam velit, non scelerisque nibh.

Fusce tempor, ex quis lobortis ultricies, magna ipsum consequat massa, quis placerat mi sem id dui. Aenean dolor risus, lobortis non ullamcorper ullamcorper, accumsan a nisi. Mauris metus dolor, vulputate nec magna sit amet, placerat feugiat odio. Mauris condimentum id arcu quis tempus. Integer feugiat accumsan est vitae pretium. Cras mattis, erat in imperdiet aliquam, nisl erat egestas lorem, scelerisque maximus dolor turpis sed quam. Aenean viverra urna sit amet justo euismod faucibus. Vestibulum dolor est, luctus et ultrices id, feugiat at lectus. Duis erat metus, rhoncus ac condimentum sodales, sollicitudin et ipsum. Donec vel nulla a justo volutpat sollicitudin vel at urna.

Pellentesque cursus quis velit at molestie. Sed ac tristique sapien. Suspendisse fermentum gravida nisi sagittis fermentum. Sed consequat, metus eu consectetur venenatis, nibh metus laoreet massa, vel interdum nunc ligula commodo erat. Ut ornare sagittis ex, sed faucibus velit. Fusce gravida auctor lacus, sit amet ornare nibh porta non. Integer posuere, velit nec hendrerit luctus, nunc elit efficitur risus, at dapibus diam ipsum ut ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a urna vulputate, iaculis ligula id, ullamcorper ipsum. Mauris sem sapien, auctor pulvinar semper sit amet, mollis euismod justo. Nullam ipsum diam, viverra vitae metus et, gravida malesuada justo. Sed lacinia ut purus a euismod. In turpis diam, semper ac auctor a, viverra eu diam. Suspendisse vel congue nisl, sit amet tempus augue. Donec id ligula felis.

Mauris eget mollis quam. Donec consectetur magna tortor, a fringilla lorem viverra vel. Sed at interdum turpis. Praesent semper erat id nunc sagittis, sed cursus tortor posuere. Suspendisse potenti. Sed tempor sem in sapien tincidunt volutpat. Vivamus tincidunt leo vel felis accumsan varius. Etiam consequat tempus accumsan. Proin eget eleifend enim, sed pulvinar turpis. Duis vel malesuada nunc. Nulla vehicula malesuada lacinia. Cras euismod id nisl non placerat.`;

const ACardStyles = {
  border: 'none',
  borderRadius: '4px',
};

const BlogPage: React.FC<Props> = (props) => (
  <ETFLayout {...props}>
    <AH1>{props.page.pageHeading}</AH1>
    <ASpacer size='8' />
    {props.posts.length ? (
      <AGrid>
        {props.posts.map((post: AllowAny) => (
          <ALink href={`blog/${post.slug.current}`} key={post._id}>
            <ACard padding='0' style={ACardStyles}>
              <AImage
                alt={post.mainImage.alt}
                className='a-image'
                src={post.mainImage.asset.url}
              />
              <ABox padding='2'>
                <AStrong>{post.title}</AStrong>
                <ASpacer size='1' />
                <AText>{preview}</AText>
              </ABox>
            </ACard>
          </ALink>
        ))}
      </AGrid>
    ) : (
      <p>{'No Posts'}</p>
    )}
  </ETFLayout>
);

const getStaticProps: GetStaticProps = async () => {
  const client = GraphqlClient.get();

  // Fetch page information
  const {
    data: {
      allPageBlog: [page],
    },
  } = await client.query({
    query: Codegen.BlogPageDocument,
  });

  // Fetch all blog posts
  const {
    data: { allPost },
  } = await client.query({
    query: Codegen.AllPostPreviewDocument,
  });

  console.log('page', page);

  return {
    props: {
      menu: await MenuRepository.getLinks(client),
      page,
      posts: allPost,
    },
  };
};

export { getStaticProps };
export type { StaticProps, Props, Page };
export default BlogPage;
