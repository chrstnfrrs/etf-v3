import * as React from 'react';
import styled from '@emotion/styled';
import { ABox, ANav } from 'aspire-components-react';

import * as Types from '../../types/index.d';

const PlaceholderLink = styled.a`
  padding: 16px 16px 16px 0;
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

  const first = {
    fontSize: '2rem',
  };

  const list = {
    paddingTop: '1.375rem',
  };

  return (
    <ANav direction='row' justify='between' padding='8x'>
      {linkSections.map((linkSection: Types.App.LinkSection, index: number) => (
        <ABox align='center' direction='row' height='full' key={index}>
          {linkSection.links.map((link: Types.App.Link, i: number) => (
            <PlaceholderLink
              href={link.route || '/'}
              key={i}
              style={i === 0 && index === 0 ? first : list}
            >
              {link.text}
            </PlaceholderLink>
          ))}
        </ABox>
      ))}
    </ANav>
  );
};

export { ETFMenu };
