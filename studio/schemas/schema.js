/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable import/no-unresolved */

import contactForm from './contact-form';
import contentMain from './content-main';
import contentPreview from './content-preview';
import button from './button';
import hero from './hero';
import homePage from './home-page';
import link from './link';
import links from './links';
import linkOptions from './link-options';
import mainImage from './main-image';
import navigation from './navigation';
import navigationOptions from './navigation-options';
import pageHeading from './page-heading';
import pages from './pages';
import post from './post';
import sectionTestimonial from './section-testimonial';
import settings from './settings';
import testimonial from './testimonial';
import pageBlog from './page-blog';
import pageContact from './page-contact';

export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,
    contactForm,
    contentMain,
    contentPreview,
    button,
    hero,
    homePage,
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
    sectionTestimonial,
    settings,
    testimonial,
  ],
});
