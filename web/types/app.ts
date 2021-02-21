export interface UnknownObject {
  [key: string]: unknown;
}

export interface Link {
  _key: string;
  route?: string;
  text?: string;
}

export interface MenuLinks {
  links?: [Link];
}
