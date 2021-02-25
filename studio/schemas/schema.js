import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

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
import pages from './pages'
import post from './post'
import settings from './settingsApp'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
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
    pages,
    post,
    settings,
  ]),
})
