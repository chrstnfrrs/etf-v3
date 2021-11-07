import React from 'react';
import { GetStaticProps } from 'next';
import { ACol, ARow } from 'aspire-components-react';
import styled from '@emotion/styled';

import * as Types from '../types/index.d';
import * as GraphqlClient from '../graphql/graphql-client';
import * as MenuRepository from '../repositories/menu';
import { ETFLayout } from '../components/etf/etf-layout';
import { ETFContactForm } from '../components/etf/etf-contact-form';
import { PlaceholderBlock } from '../components/cookbook/block';
import { ContactPageDocument } from '../graphql/generated';

type Page = {
  title: string;
  description: string;
  links: Types.App.Link[];
  callToActionRaw: Types.Sanity.Block[];
  contactForm: {
    submit: string;
  };
};

type Props = {
  page: Page;
  menu: Types.AllowAny;
};

type StaticProps = {
  props: Props;
};

const PlaceholderLink = styled.a`
  color: #101010;
  padding: 16px 16px 0px 0;
`;
// <ETFLayout {...props}>

const ContactPage: React.FC<Props> = (props) => (
  <ETFLayout {...props}>
    <ARow height='full' justify='between' padding='0'>
      <ACol justify='between'>
        <PlaceholderBlock content={props.page.callToActionRaw} />
        <ARow justify='start' padding='0'>
          {props.page.links.map((link) => (
            <PlaceholderLink href={link.route} key={link._key}>
              {link.text}
            </PlaceholderLink>
          ))}
        </ARow>
      </ACol>
      <ACol
        justify='start'
        margin='1'
        minWidth='64'
        style={{ maxWidth: '32rem' }}
        width='full'
      >
        <ETFContactForm submit={props.page.contactForm.submit} />
      </ACol>
    </ARow>
  </ETFLayout>
);

const getStaticProps: GetStaticProps = async () => {
  const client = GraphqlClient.get();

  const [{ data }, menu] = await Promise.all([
    client.query({
      query: ContactPageDocument,
    }),
    MenuRepository.getLinks(client),
  ]);
  const page = data.allPageContact[0];

  return {
    props: {
      menu,
      page,
    },
  };
};

export { getStaticProps };

export type { Props, Page, StaticProps };

export default ContactPage;
