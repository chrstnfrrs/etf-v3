import React, { ReactElement } from 'react';

import { IPageProps } from '../../types/app';

import AppMenu from './menu';

const withLayout = (Page: React.FC<IPageProps>) => (
  props: IPageProps,
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
