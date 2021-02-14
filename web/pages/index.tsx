import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

import { AHero, AHeading } from 'aspire-components-react';

import ALoader from '../components/ALoader';
import { useAllPagesQuery } from '../graphql/generated';

const Home = (): ReactElement => {
  const router = useRouter();

  const { data, loading, error } = useAllPagesQuery({
    variables: {
      route: router.pathname,
    },
  });

  if (error) router.push('error');

  if (data && data.allPages && data.allPages[0] && data.allPages[0].sections) {
    return (
      <div>
        {data.allPages[0].sections.map((section) => {
          if (section.__typename === 'Hero') {
            console.log(section.heroImage.asset.url)

            return (
              <AHero key={section._key} backgroundImage={section.heroImage.asset.url}>
                <AHeading as={'h1'}>{section.heading}</AHeading>
              </AHero>
            );
          }
          return null;
        })}
        <AHeading type={'h6'}>Heading things</AHeading>
      </div>
    );
  }

  return <ALoader />;
};

export default Home;
