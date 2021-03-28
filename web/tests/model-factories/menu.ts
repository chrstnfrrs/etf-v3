import Chance from 'chance';

import { Links, NavigationOptions } from '../../graphql/generated';

const chance = new Chance();

const createRandomLink = (): Links => ({
  _key: chance.string(),
});

const createRandomLinkOptions = (): NavigationOptions => ({
  _key: chance.string(),
});

export { createRandomLink, createRandomLinkOptions };
