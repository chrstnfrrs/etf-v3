import React, { ReactElement } from 'react';

import {
  PlaceholderLink,
  PlaceholderNav,
  PlaceholderBox,
} from '../placeholders';
import { MenuLinks } from '../../types/app';

const AppMenu = (props: MenuLinks): ReactElement => {
  const linkSections = props.navigationLinks;

  return (
    <PlaceholderNav>
      {linkSections.map((linkSection, index) => (
        <PlaceholderBox key={index}>
          {linkSection?.links?.map((link, i) => (
            <PlaceholderLink href={link?.route || '/'} key={i}>
              {link?.text}
            </PlaceholderLink>
          ))}
        </PlaceholderBox>
      ))}
    </PlaceholderNav>
  );
};

export default AppMenu;

/* <ALink
  className='menu-link'
  decorators={link?.linkOptions?.decorator}
  href={link?.route}
  key={index}
  size={link?.linkOptions?.size}
  weight={link?.linkOptions?.weight}
>
  {link?.text}
</ALink> */
