import React from 'react';
import { AContainer } from 'aspire-components-react';
import Head from 'next/head';

import * as Types from '../../types/index.d';
import { StyledContainer, StyledWrapper } from '../cookbook/styled';

import { ETFMenu } from './etf-menu';

type Props = {
  menu: Types.App.Menu;
  page: {
    title: string;
    description: string;
    [key: string]: Types.AllowAny;
  };
  children: Types.AllowAny;
  [key: string]: Types.AllowAny;
};

const ETFLayout: React.FC<Props> = ({ children, menu, page }) => (
  <>
    <ETFMenu menu={menu} />
    <Head>
      <title>{page.title}</title>
      <meta content={page.title} key='title' property='og:title' />
      <meta content={page.description} name='description' />
    </Head>
    <AContainer minHeight='100vh'>
      <StyledContainer>
        <StyledWrapper>{children}</StyledWrapper>
      </StyledContainer>
    </AContainer>
  </>
);

export { ETFLayout };
