import {
  NavigationOptions,
  Links,
  Pages,
  PageBlog,
  PageContact,
  Post,
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

interface IPageProps {
  page: Pages | PageContact | PageBlog | Post;
  navigationLinks: Link[];
  navigationOptions: NavigationOptions;
}

interface IBlogPageProps extends IPageProps {
  page: PageBlog;
  posts: ALLOW_ANY;
  navigationLinks: Link[];
  navigationOptions: NavigationOptions;
}

interface IPostPageProps extends IPageProps {
  page: Post;
  navigationLinks: Link[];
  navigationOptions: NavigationOptions;
}

interface IContactPageProps extends IPageProps {
  page: PageContact;
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
  IBlogPageProps,
  IPostPageProps,
  IContactPageProps,
};
