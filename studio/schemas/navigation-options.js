export default {
  fields: [
    {
      name: 'alignItems',
      options: {
        list: [
          {
            title: 'Left',
            value: 'left',
          },
          {
            title: 'Center',
            value: 'center',
          },
          {
            title: 'Between',
            value: 'between',
          },
          {
            title: 'Right',
            value: 'right',
          },
        ],
        collapsed: false,
      },
      title: 'Align Items',
      type: 'string',
    },
  ],
  name: 'navigationOptions',
  options: {
    collapsible: true,
  },
  title: 'Navigation Options',
  type: 'document',
};
