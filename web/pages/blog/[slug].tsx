import React, { ReactElement } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { AContainer, AHeading, ASection, AText } from 'aspire-components-react';

import { getGraphqlClient } from '../../graphql/utils';
import { AllSlugsDocument } from '../../graphql/generated';

const PostPage = (): ReactElement => {
  const arr = ['asdf', 'asdf', 'asdf', 'asdf', 'asdf'];

  const bodySample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel mi et eros malesuada sagittis sodales at mi. Fusce nec felis finibus, faucibus odio et, mollis ligula. Vestibulum posuere gravida ipsum nec accumsan. Donec non interdum libero, at tempor mauris. Praesent ex nunc, rutrum a orci quis, imperdiet vestibulum metus. Vestibulum non velit justo. Praesent consectetur mattis augue at rutrum. Ut vitae mattis sapien. Curabitur tristique dolor sit amet massa.`;

  return (
    <AContainer col>
      <AHeading>Erin Tallard Fitness</AHeading>
      {arr.length &&
        arr.map((item, index) => (
          <ASection key={index}>
            <AHeading type={'h2'} as={'h5'}>
              Blog Title
            </AHeading>
            <AHeading type={'subtitle-2'}>Erin Tallard Fitness</AHeading>
            <AText as={'overline'}>{bodySample}</AText>
          </ASection>
        ))}
    </AContainer>
  );
};

export const getStaticProps: GetStaticProps = async (context): Promise<any> => {
  const client = getGraphqlClient();

  return {
    props: {},
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

export default PostPage;
