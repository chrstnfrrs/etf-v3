import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import withLayout from '../components/app/with-layout';
import { getGraphqlClient } from '../graphql/utils';
import { getLinks } from '../repositories/menu';
import { getContactPage } from '../repositories/page';
import { IContactPageProps } from '../types/app';
import {
  PlaceholderBox,
  PlaceholderCol,
  PlaceholderContainerContact,
  PlaceholderLink,
  PlaceholderRow,
  PlaceholderSpacer,
} from '../components/placeholders';
import { ContactForm } from '../components/cookbook/contact-form';
import { PlaceholderBlock } from '../components/cookbook/block';

const ContactPage = ({
  page,
  ...props
}: IContactPageProps): React.ReactElement => {
  // eslint-disable-next-line no-console
  console.log('props', props);

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta content={page.title as string} key='title' property='og:title' />
        <meta content={page.description as string} name='description' />
      </Head>
      <PlaceholderContainerContact>
        <PlaceholderRow justify='space-between'>
          <PlaceholderCol justify='space-between'>
            <PlaceholderBlock content={page.callToActionRaw} />
            <PlaceholderSpacer />
            <PlaceholderRow justify='flex-start'>
              {page?.links?.map((link) => (
                <PlaceholderLink href={link?.route as string} key={link?._key}>
                  {link?.text}
                </PlaceholderLink>
              ))}
            </PlaceholderRow>
          </PlaceholderCol>
          <PlaceholderCol>
            <ContactForm submit={page?.contactForm?.submit} />
          </PlaceholderCol>
        </PlaceholderRow>
      </PlaceholderContainerContact>
    </>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();

  const page = await getContactPage(client);

  return {
    props: {
      page,
      ...(await getLinks(client)),
    },
  };
};

export { getStaticProps };

export default withLayout(ContactPage);
