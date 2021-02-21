import Link from 'next/link';
import React, { ReactElement } from 'react';
import { ANav } from 'aspire-components-react';
import { MenuLinks } from '../../types/app';

const AppMenu = (props: MenuLinks): ReactElement => {
  if (props?.links) {
    return (
      <ANav>
        {props.links.map((link) => (
          <Link key={link._key} href={link.route}>
            {link.text}
          </Link>
        ))}
      </ANav>
    );
  }

  return (
    <ANav>
      <Link href={'/'}>Erin Tallard Fitness</Link>
    </ANav>
  );
};

export default AppMenu;
