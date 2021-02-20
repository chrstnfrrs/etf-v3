import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { AHero, AHeading } from 'aspire-components-react';

import ALoader from '../components/ALoader';
import { useAllPagesQuery } from '../graphql/generated';

const Home = ({ sections }): ReactElement => {
  console.log('sections', sections);

  if (sections) {
    return (
      <div>
        {sections.map((section) => {
          if (section?.__typename === 'Hero') {
            return (
              <AHero key={section._key} backgroundImage={section?.heroImage?.asset?.url}>
                <AHeading>{section.heading}</AHeading>
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

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: process.env.SANITY_URL,
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query AllPages($route: String) {
        allPages(where: { route: { eq: $route } }) {
          sections {
            ... on Hero {
              _key
              _type
              heading
              heroImage {
                alt
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      route: '/',
    },
  });
  console.log('data', data);
  return {
    props: {
      sections: data.data.allPages[0].sections,
    }, // will be passed to the page component as props
  };
}

export default Home;
