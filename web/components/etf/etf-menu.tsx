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
  navigationLinks: Types.App.LinkSection[];
};

const ETFMenu: React.FC<Props> = (props) => {
  const linkSections = props.navigationLinks;

  return (
    <ANav direction='row' justify='between' padding='8x'>
      {linkSections.map((linkSection: Types.App.LinkSection, index: number) => (
        <ABox direction='row' key={index}>
          {linkSection.links.map((link: Types.App.Link, i: number) => (
            <PlaceholderLink href={link.route || '/'} key={i}>
              {link.text}
            </PlaceholderLink>
          ))}
        </ABox>
      ))}
    </ANav>
  );
};

export { ETFMenu };
