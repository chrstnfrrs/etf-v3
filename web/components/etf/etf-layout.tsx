import React from 'react';
import { AContainer } from 'aspire-components-react';
import Head from 'next/head';

import * as Types from '../../types/index.d';

import { ETFMenu } from './etf-menu';

type Props = {
  menu: Types.App.Menu;
  page: {
    title: string;
    description: string;
    [key: string]: Types.AllowAny;
  };
  [key: string]: Types.AllowAny;
};

const ETFLayout: React.FC<Props> = (props) => (
  <>
    <ETFMenu {...props.menu} />
    <Head>
      <title>{props.page.title}</title>
      <meta content={props.page.title} key='title' property='og:title' />
      <meta content={props.page.description} name='description' />
    </Head>
    <AContainer minHeight='100vh'>{props.children}</AContainer>
  </>
);

export { ETFLayout };
