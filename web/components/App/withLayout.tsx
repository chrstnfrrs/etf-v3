import React, { ReactElement } from 'react';
import { HomeProps } from '../../types/home';
import { UnknownObject } from '../../types/app';
import AppMenu from './AppMenu';

const withLayout = (Page: React.FC<UnknownObject>) => (props: HomeProps): ReactElement => (
  <>
    <AppMenu links={props.links} />
    <Page {...props} />
  </>
);

export default withLayout;