import {MdMenu} from 'react-icons/md'

export default {
  name: 'links',
  title: 'Links',
  type: 'document',
  fields: [
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type:'link'}],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'links',
    },
    prepare(selection) {
      return {
        title: `Links: ${selection.title.map(title => title.text).join(', ')}`,
        media: MdMenu
      }
    },
  },
}