export interface UnknownObject {
  [key: string]: unknown;
}

export interface Link {
  _key: string;
  route?: string;
  text?: string;
  decorator?: string;
}

export interface MenuLinks {
  leftLinks?: [Link];
  rightLinks?: [Link];
}
