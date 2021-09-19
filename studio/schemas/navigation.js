export default {
  fields: [
    {
      name: 'navigationLinks',
      of: [{ type: 'links' }],
      options: {
        collapsed: false,
      },
      title: 'Navigation Links',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'navigationOptions',
      title: 'Navigation Options',
      type: 'navigationOptions',
    },
  ],
  name: 'navigation',
  options: {
    collapsible: false,
  },
  title: 'Navigation',
  type: 'document',
};
