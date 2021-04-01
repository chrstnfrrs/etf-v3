import React, { ReactElement } from 'react';

import { ALLOW_ANY, IPageProps } from '../../types/app';

import AppMenu from './menu';

const withLayout = (Page: React.FC<ALLOW_ANY>) => (
  props: ALLOW_ANY,
): ReactElement => (
  <>
    <AppMenu
      navigationLinks={props.navigationLinks}
      navigationOptions={props.navigationOptions}
    />
    <Page {...props} />
  </>
);

export default withLayout;
