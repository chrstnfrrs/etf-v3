type Link = {
  _key: string;
  route?: string | undefined;
  text: string;
};

type LinkSection = {
  links: Links[];
};

type Menu = {
  navigationLinks: LinkSection[];
};

export { Link, LinkSection, Menu };
