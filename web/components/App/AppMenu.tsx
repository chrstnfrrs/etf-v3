import React, { ReactElement } from 'react';
import { ALink, ANav } from 'aspire-components-react';
import { MenuLinks } from '../../types/app';

const AppMenu = (props: MenuLinks): ReactElement => {
  const justify = props.navigationOptions?.alignItems;
  const linkSections = props.navigationLinks;

  return (
    <ANav justify={justify}>
      {linkSections.map((linkSection, index) => (
        <div key={index}>
          {linkSection.links.map((link, index) => (
            <ALink
              key={index}
              href={link.route}
              size={link.linkOptions?.size}
              decorators={link.linkOptions?.decorator}
              weight={link.linkOptions?.weight}
              className={'menu-link'}
            >
              {link.text}
            </ALink>
          ))}
        </div>
      ))}
    </ANav>
  );
};

export default AppMenu;
