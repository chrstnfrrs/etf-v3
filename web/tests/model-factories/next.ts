import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import Chance from 'chance';

const chance = new Chance();

const createRandomGetStaticPathsContext = (): GetStaticPathsContext => ({
  defaultLocale: undefined,
  locales: undefined,
});

const createRandomGetStaticPropsContextForPage = (): GetStaticPropsContext => ({
  params: { slug: chance.word() },
});

export {
  createRandomGetStaticPathsContext,
  createRandomGetStaticPropsContextForPage,
};
