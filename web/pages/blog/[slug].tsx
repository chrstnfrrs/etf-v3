import React, { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlockContent from '@sanity/block-content-to-react';
import { AContainer, AHeading, ASection, AText } from 'aspire-components-react';

import { getGraphqlClient } from '../../graphql/utils';
import { AllPostPostDocument, AllSlugsDocument } from '../../graphql/generated';
import withLayout from '../../components/App/withLayout';
import { getLinks } from '../../utils/menu';

const PostPage = (props): ReactElement => {
  const post = props?.post;

  return (
    <AContainer col>
      <AHeading>{post?.title}</AHeading>
      <BlockContent blocks={post.bodyRaw} />
    </AContainer>
  );
};

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  const client = getGraphqlClient();
  const { slug } = context.params;

  const { data } = await client.query({
    query: AllPostPostDocument,
    variables: {
      slug,
    },
  });

  console.log('data', data);

  return {
    props: {
      post: data.allPost?.[0] || null,
      ...(await getLinks(client)),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getGraphqlClient();

  const { data } = await client.query({
    query: AllSlugsDocument,
  });

  const pathsList = data?.allPost?.reduce((list, post) => [{ params: { slug: post.slug.current } }, ...list], []);

  return {
    paths: pathsList,
    fallback: false,
  };
};

export default withLayout(PostPage);
