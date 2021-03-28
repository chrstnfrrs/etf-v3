import React, { ReactElement } from 'react';

import { IHomeProps } from '../../types/app';

import AppMenu from './menu';

const withLayout = (Page: React.FC<IHomeProps>) => (
  props: IHomeProps,
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
