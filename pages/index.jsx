/* eslint-disable react/jsx-pascal-case */
import React from 'react';
// import styled from '@emotion/styled';

import { ETFLayout } from '../components/etf/etf-layout';
import { PageSerializer } from '../components/sanity/component-serializer';
// Static Prop Imports
import * as GraphqlClient from '../graphql/graphql-client';
import * as MenuRepository from '../repositories/menu';

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
  // const {
  //   data: {
  //     allPages: [page],
  //   },
  // } = await client.query({
  //   query: Codegen.HomePageDocument,
  // });

  const TestimonialSection = {
    __typename: 'SectionRow',
    _key: 'asdf2',
    title: 'Testimonials',
    type: 'testimonials',
  };
  const CalendlySection = {
    __typename: 'SectionRow',
    _key: 'asdf3',
    title: 'Schedule Time to Chat',
    type: 'calendly',
  };
  const page = {
    sections: [
      {
        __typename: 'Hero',
        _key: '04f93f112161',
        button: {
          text: 'Schedule time to chat',
        },
        heading: 'Healthy Living!',
        heroImage: {
          __typename: 'MainImage',
          alt: 'Man doing pushups',
          asset: {
            __typename: 'SanityImageAsset',
            url:
              'https://images.pexels.com/photos/841125/pexels-photo-841125.jpeg?cs=srgb&dl=pexels-victor-freitas-841125.jpg&fm=jpg',
            // 'https://cdn.sanity.io/images/wbbg77u8/production/ba4c07c7186ebe58bd4bfe42e6cb0a68722f6e78-4346x2897.jpg',
          },
        },
      },
      TestimonialSection,
      CalendlySection,
    ],
  };

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, purus quis cursus sagittis, tortor nunc mattis urna, id malesuada ipsum massa vitae turpis. Praesent posuere vitae velit finibus ornare. Vestibulum finibus at ex sit amet tempus. Donec molestie erat vel magna congue, et cursus libero tincidunt. Nullam eu nulla accumsan, ultricies ante nec, finibus magna. Nam id magna bibendum, fermentum libero sed, molestie est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consequat dui quis risus luctus, ut vestibulum nibh vestibulum. Sed in nunc urna. Duis mollis rhoncus purus vitae laoreet.';
  const testimonials = [
    {
      _key: 'dude_a',
      name: 'Dude A',
      text,
    },
    {
      _key: 'dude_b',
      name: 'Dude B',
      text,
    },
    {
      _key: 'dude_c',
      name: 'Dude C',
      text,
    },
  ];
  const calendly = [
    {
      _key: 'rtyuhd',
      link: 'https://calendly.com/chrstnfrrs/15min',
    },
  ];

  return {
    props: {
      data: {
        calendly,
        testimonials,
      },
      menu: await MenuRepository.getLinks(client),
      page,
      // posts: allPost,
    },
  };
};

export { getStaticProps };
// export type { StaticProps, Props, Page };
export default BlogPage;
