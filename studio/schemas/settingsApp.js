import { MdSettings } from 'react-icons/md'

export default {
  name: 'settings',
  type: 'document',
  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [{type:'links'}],
      options: {
        collapsed: false,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'navigationOptions',
      title: 'Navigation Options',
      type: 'object',
      options: {
        collapsible: true
      },
      fields: [
        {
          name: 'alignItems',
          title: 'Align Items',
          type: 'string',
          options: {
            list: [
              { title: 'Left', value: 'left' },
            ],
            collapsed: true,
          },
        },
      ]
    },
  ],
  preview: {
    select: {
      title: 'Settings'
    }
  }
}