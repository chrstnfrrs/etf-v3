import React, { ReactElement } from 'react';
import { ALink, ANav } from 'aspire-components-react';
import { MenuLinks } from '../../types/app';

const AppMenu = (props: MenuLinks): ReactElement => (
  <ANav justify={'between'}>
    <div>
      {props.leftLinks?.map((link) => (
        <ALink key={link._key} href={link.route} className={'menu-link'}>
          {link.text}
        </ALink>
      ))}
    </div>
    <div>
      {props.rightLinks?.map((link) => (
        <ALink key={link._key} href={link.route} className={'menu-link'} decorators={link?.decorator}>
          {link.text}
        </ALink>
      ))}
    </div>
  </ANav>
);

export default AppMenu;
