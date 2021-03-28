import Chance from 'chance';

import { Pages } from '../../graphql/generated';
import { ALLOW_ANY } from '../../types/app';

const chance = new Chance();

// const createRandomSection = () => ({
//   __typename: chance.word(),
// });

const createRandomPage = (page: ALLOW_ANY = {}): Pages => ({
  route: chance.word(),
  // sections: chance.n(createRandomSection, chance.d4()),
  ...page,
});

export { createRandomPage };
