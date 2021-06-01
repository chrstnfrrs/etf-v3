import Chance from 'chance';

import * as Types from '../../types/index.d';

const chance = new Chance();

const createBlock = (): Types.Sanity.Block => ({
  _key: chance.string(),
  _type: 'block',
  children: chance.n(chance.string, chance.d4()),
  markDefs: [],
  style: 'h1',
});

export { createBlock };
