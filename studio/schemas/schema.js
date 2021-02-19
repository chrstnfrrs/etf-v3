import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import contentMain from './contentMain'
import contentPreview from './contentPreview'
import button from './button'
import hero from './hero'
import link from './link'
import mainImage from './mainImage'
import menu from './menu'
import pages from './pages'
import post from './post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    contentMain,
    contentPreview,
    button,
    hero,
    link,
    mainImage,
    menu,
    pages,
    post,
  ]),
})
