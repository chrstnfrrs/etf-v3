import * as React from 'react';
import styled from '@emotion/styled';
import { ABox, ANav } from 'aspire-components-react';
import Link from 'next/link';

import * as Types from '../../types/index.d';

interface IPlaceholderLink {
  i: number;
  index: number;
}
const PlaceholderLink = styled.span`
  padding: 16px 16px 16px 0;
  ${(props: IPlaceholderLink) =>
    props.i === 0 && props.index === 0
      ? 'font-size: 2rem;'
      : 'padding-top: 1.35rem;'}
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  menu: {
    navigationLinks: Types.App.LinkSection[];
  };
};

const ETFMenu: React.FC<Props> = ({ menu }) => {
  const linkSections = menu.navigationLinks;

  return (
    <ANav direction='row' justify='between' padding='8x'>
      {linkSections.map((linkSection: Types.App.LinkSection, index: number) => (
        <ABox align='center' direction='row' height='full' key={index}>
          {linkSection.links.map((link: Types.App.Link, i: number) => (
            <Link href={link.route || '/'} key={i}>
              <PlaceholderLink i={i} index={index}>
                {link.text}
              </PlaceholderLink>
            </Link>
          ))}
        </ABox>
      ))}
    </ANav>
  );
};

export { ETFMenu };
