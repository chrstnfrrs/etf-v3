import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { AContainer, AHeading, ASection, AText } from 'aspire-components-react';

import ALoader from '../../components/ALoader';
import { useAllPagesQuery } from '../../graphql/generated';

const Blog = (): ReactElement => {
  const router = useRouter();

  const { data, error } = useAllPagesQuery({
    variables: {
      route: router.pathname,
    },
  });

  const arr = ['asdf','asdf','asdf','asdf','asdf']

  const bodySample = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel mi et eros malesuada sagittis sodales at mi. Fusce nec felis finibus, faucibus odio et, mollis ligula. Vestibulum posuere gravida ipsum nec accumsan. Donec non interdum libero, at tempor mauris. Praesent ex nunc, rutrum a orci quis, imperdiet vestibulum metus. Vestibulum non velit justo. Praesent consectetur mattis augue at rutrum. Ut vitae mattis sapien. Curabitur tristique dolor sit amet massa.`;

  if (error) router.push('error');

  if (true) {
    return (
      <AContainer col>
        <AHeading>Erin Tallard Fitness</AHeading>
        {arr.map((item, index) => (
          <ASection key={index}>
            <AHeading type={'h2'} as={'h5'}>
              Blog Title
            </AHeading>
            <AHeading type={'subtitle-2'}>Erin Tallard Fitness</AHeading>
            <AText>{bodySample}</AText>
          </ASection>
        ))}
      </AContainer>
    );
  }

  return <ALoader />;
};

export default Blog;
