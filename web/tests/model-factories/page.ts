import Chance from 'chance';

import { PageContact, Pages } from '../../graphql/generated';
import { ALLOW_ANY } from '../../types/app';

const chance = new Chance();

// const createRandomSection = () => ({
//   __typename: chance.word(),
// });

const createRandomContactPage = (page: ALLOW_ANY = {}): PageContact => ({
  _key: chance.guid(),
  // sections: chance.n(createRandomSection, chance.d4()),
  ...page,
});

const createRandomPage = (page: ALLOW_ANY = {}): Pages => ({
  route: chance.word(),
  // sections: chance.n(createRandomSection, chance.d4()),
  ...page,
});

export { createRandomContactPage, createRandomPage };
