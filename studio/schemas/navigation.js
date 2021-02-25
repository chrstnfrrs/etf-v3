export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  options: {
    collapsible: false
  },
  fields: [
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
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
      type: 'navigationOptions',
    },
  ]
}