import {
  NavigationOptions,
  ContactFormOrHeroOrPageHeading,
  Links,
  Pages,
} from '../graphql/generated';

/* eslint-disable */
// @ts-ignore
type ALLOW_ANY = any;
/* eslint-enable */

type TStaticPagePaths = {
  params: {
    slug: string;
  };
}[];

interface IPageProps {
  props: {
    page: Pages;
  };
}

interface UnknownObject {
  [key: string]: unknown;
}

interface LinkOptions {
  size: string;
  weight: string;
  decorator: string;
}

interface Link {
  _key: string;
  route?: string;
  text?: string;
  linkOptions?: LinkOptions;
}

interface MenuLinks {
  navigationLinks: Links[];
  navigationOptions: NavigationOptions;
}

interface IHomeProps {
  page: Pages;
  sections: ContactFormOrHeroOrPageHeading[];
  navigationLinks: Link[];
  navigationOptions: NavigationOptions;
}

export type {
  UnknownObject,
  Link,
  LinkOptions,
  MenuLinks,
  TStaticPagePaths,
  ALLOW_ANY,
  IPageProps,
  IHomeProps,
};
