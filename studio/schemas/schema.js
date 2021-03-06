import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import contactForm from './contactForm'
import contentMain from './contentMain'
import contentPreview from './contentPreview'
import button from './button'
import hero from './hero'
import link from './link'
import links from './links'
import linkOptions from './linkOptions'
import mainImage from './mainImage'
import navigation from './navigation'
import navigationOptions from './navigationOptions'
import pageHeading from './pageHeading'
import pages from './pages'
import post from './post'
import settings from './settings'
import pageBlog from './pageBlog'
import pageContact from './pageContact'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    contactForm,
    contentMain,
    contentPreview,
    button,
    hero,
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
    settings,
  ]),
})
