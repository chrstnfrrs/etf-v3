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
      type: 'object',
      options: {
        collapsible: true
      },
      fields: [
        {
          name: 'size',
          title: 'Font Size',
          type: 'string',
          options: {
            list: [
              { title: '12px', value: '12' },
              { title: '14px', value: '14' },
              { title: '16px', value: '16' },
              { title: '20px', value: '20' },
              { title: '24px', value: '24' },
            ]
          },
        },
        {
          name: 'weight',
          title: 'Font Weight',
          type: 'string',
          options: {
            list: [
              { title: 'Regular', value: 'regular' },
              { title: 'Medium', value: 'medium' },
              { title: 'Semi-Bold', value: 'semi-bold' },
              { title: 'Bold', value: 'bold' },
            ]
          },
        },
        {
          name: 'decorator',
          title: 'Decorator',
          type: 'string',
          options: {
            list: [
              { title: 'Underline', value: 'underline' },
            ]
          },
        },
      ]
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