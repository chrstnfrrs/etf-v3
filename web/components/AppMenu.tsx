import Link from 'next/link';
import React, { ReactElement } from 'react';
import { ANav } from 'aspire-components-react';

import { useAllMenuQuery } from '../graphql/generated';

const AppMenu = (): ReactElement => {
  const { data, loading, error } = useAllMenuQuery();

  const linkList = data && data.allMenu && data.allMenu[1] && data.allMenu[1].link ? data.allMenu[1].link : null;

  if (linkList) {
    return (
      <ANav>
        {linkList.map((link) => (
          <Link key={link._key} href={link.route || ''}>
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
