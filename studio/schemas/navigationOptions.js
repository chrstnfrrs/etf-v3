export default {
  name: 'navigationOptions',
  title: 'Navigation Options',
  type: 'document',
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
          { title: 'Center', value: 'center' },
          { title: 'Between', value: 'between' },
          { title: 'Right', value: 'right' },
        ],
        collapsed: false,
      },
    },
  ]
}