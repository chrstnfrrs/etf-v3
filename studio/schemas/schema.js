/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable import/no-unresolved */

import contactForm from './contact-form';
import layoutSplitContent from './layout-split-content';
import contentMain from './content-main';
import contentPreview from './content-preview';
import descriptionListSection from './description-list-section';
import button from './button';
import hero from './hero';
import homePage from './home-page';
import keyValuePair from './key-value-pair';
import layoutSplitFields from './layout-split-fields';
import layoutSplit from './layout-split';
import link from './link';
import links from './links';
import linkOptions from './link-options';
import mainImage from './main-image';
import navigation from './navigation';
import navigationOptions from './navigation-options';
import pageHeading from './page-heading';
import pages from './pages';
import post from './post';
import row from './row';
import service from './service';
import settings from './settings';
import testimonial from './testimonial';
import pageBlog from './page-blog';
import pageContact from './page-contact';

export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,
    contactForm,
    layoutSplitContent,
    contentMain,
    contentPreview,
    descriptionListSection,
    button,
    hero,
    homePage,
    keyValuePair,
    layoutSplitFields,
    layoutSplit,
    link,
    links,
    linkOptions,
    mainImage,
    navigation,
    navigationOptions,
    pageBlog,
    pageContact,
    pageHeading,
    post,
    pages,
    row,
    service,
    settings,
    testimonial,
  ],
});
