import React, { ReactElement } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { AContainer, AHeading, ASection, ALink } from 'aspire-components-react';

import withLayout from '../../components/App/withLayout';
import { getGraphqlClient } from '../../graphql/utils';
import { AllPostPreviewDocument } from '../../graphql/generated';
import { getLinks } from '../../utils/menu';

const BlogPage = (props): ReactElement => {
  console.log(props.posts)

  const arr = ['asdf', 'asdf', 'asdf', 'asdf', 'asdf'];

  const bodySample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel mi et eros malesuada sagittis sodales at mi. Fusce nec felis finibus, faucibus odio et, mollis ligula. Vestibulum posuere gravida ipsum nec accumsan. Donec non interdum libero, at tempor mauris. Praesent ex nunc, rutrum a orci quis, imperdiet vestibulum metus. Vestibulum non velit justo. Praesent consectetur mattis augue at rutrum. Ut vitae mattis sapien. Curabitur tristique dolor sit amet massa.`;

  return (
    <AContainer col>
      <AHeading>Erin Tallard Fitness</AHeading>
      {props.posts?.map((post, index) => (
        <ALink key={index} href={`/blog/${post.slug.current}`}>
          <ASection>
            <AHeading type={'h2'} as={'h5'}>
              {post.title}
            </AHeading>
            <AHeading type={'subtitle-2'}>{post.publishedAt}</AHeading>
            <BlockContent blocks={post.previewRaw} />
          </ASection>
        </ALink>
      ))}
    </AContainer>
  );
};

export const getStaticProps = async (context): Promise<any> => {
  const client = getGraphqlClient();

  const { data } = await client.query({
    query: AllPostPreviewDocument,
  });

  return {
    props: {
      posts: data.allPost,
      ...(await getLinks(client)),
    },
  };
};

export default withLayout(BlogPage);
