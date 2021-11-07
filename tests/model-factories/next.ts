import { GetStaticPathsContext, GetServerSidePropsContext } from 'next';
import Chance from 'chance';

const chance = new Chance();

const createRandomGetStaticPathsContext = (): GetStaticPathsContext => ({
  defaultLocale: undefined,
  locales: undefined,
});

const createRandomGetServerSidePropsContextForPage = (): GetServerSidePropsContext => ({
  params: { slug: chance.word() },
});

export {
  createRandomGetStaticPathsContext,
  createRandomGetServerSidePropsContextForPage,
};
