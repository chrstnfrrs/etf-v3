import { MdStar } from 'react-icons/md'

export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'route',
      title: 'Route',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'linkOptions',
      title: 'Link Options',
      type: 'linkOptions',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'route',
    },
    prepare: (selection) => ({
      title: selection.title,
      subtitle: selection.subtitle,
      media: MdStar
    }),
  }
}