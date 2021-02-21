import React from 'react';
import { GetStaticProps } from 'next';

import withLayout from '../components/App/withLayout';
import HomeHero from '../components/Home/HomeHero';
import { AllPagesDocument } from '../graphql/generated';
import { getGraphqlClient } from '../graphql/utils';
import { HomeProps } from '../types/home';
import { getLinks } from '../utils/menu';

const sectionMap = {
  Hero: HomeHero,
};

const Home: React.FC<HomeProps> = (props: HomeProps) =>
  props?.sections ? (
    <>
      {props.sections.map((section) =>
        sectionMap[section?.__typename] ? sectionMap[section.__typename](section) : null,
      )}
    </>
  ) : null;

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();

  const { data } = await client.query({
    query: AllPagesDocument,
    variables: {
      route: '/',
    },
  });

  return {
    props: {
      sections: data?.allPages?.[0]?.sections,
      ...(await getLinks(client)),
    },
  };
};

export default withLayout(Home);
