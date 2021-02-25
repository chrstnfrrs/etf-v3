import { NavigationOptions, Links } from '../graphql/generated';

export interface UnknownObject {
  [key: string]: unknown;
}

export interface LinkOptions {
  size: string;
  weight: string;
  decorator: string;
}

export interface Link {
  _key: string;
  route?: string;
  text?: string;
  linkOptions?: LinkOptions;
}

export interface MenuLinks {
  navigationLinks?: [Links];
  navigationOptions?: NavigationOptions;
}
