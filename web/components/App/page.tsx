import React from 'react';
import Head from 'next/head';

import { IHomeProps } from '../../types/app';
import { ContactFormOrHeroOrPageHeading } from '../../graphql/generated';
import { ContactForm } from '../cookbook/contact-form';
import {
  PlaceholderH1,
  PlaceholderH3,
  PlaceholderContainer,
  PlaceholderRow,
  PlaceholderCol,
  PlaceholderBox,
  PlaceholderChip,
  PlaceholderSpacer,
} from '../placeholders';

const Page: React.FC<IHomeProps> = ({ page, sections }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta content={page.title as string} key='title' property='og:title' />
        <meta content={page.description as string} name='description' />
      </Head>
      <PlaceholderContainer>
        {sections.map((section: ContactFormOrHeroOrPageHeading):
          | React.ReactChild
          | undefined => {
          if (section.__typename === 'ContactForm') {
            return (
              <PlaceholderRow>
                <PlaceholderCol justify='space-between'>
                  <PlaceholderBox direction='column'>
                    <PlaceholderH1>{'Get in touch!'}</PlaceholderH1>
                    <PlaceholderH3>
                      {"Let's work together to make a sustainable change!"}
                    </PlaceholderH3>
                  </PlaceholderBox>
                  <PlaceholderSpacer />
                  <PlaceholderRow justify='flex-start'>
                    <PlaceholderChip>{'Facebook'}</PlaceholderChip>
                    <PlaceholderChip>{'Instagram'}</PlaceholderChip>
                  </PlaceholderRow>
                </PlaceholderCol>
                <PlaceholderCol>
                  <ContactForm key={section._key} submit={section.submit} />
                </PlaceholderCol>
              </PlaceholderRow>
            );
          }

          // if (section.__typename === 'PageHeading') {
          //   return (
          // <PlaceholderH1 key={section._key}>{section.title}</PlaceholderH1>
          //   );
          // }

          return undefined;
        })}
      </PlaceholderContainer>
    </>
  );
};

export { Page };
