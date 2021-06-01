import Chance from 'chance';

import * as Types from '../../types/index.d';

const chance = new Chance();

const createLink = (link = {}): Types.App.Link => ({
  _key: chance.string(),
  route: chance.string(),
  text: chance.string(),
  ...link,
});

const createLinkSection = () => ({
  links: chance.n(createLink, chance.d4() + 1),
});

const createMenu = (menu = {}): Types.App.Menu => {
  const linkSections = chance.n(createLinkSection, chance.d4() + 1);

  linkSections[0].links[0].route = undefined;

  return {
    navigationLinks: linkSections,
    ...menu,
  };
};

export { createLink, createMenu };
