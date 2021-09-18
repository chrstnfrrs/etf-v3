export default {
  fields: [
    {
      name: 'size',
      options: {
        list: [
          {
            title: '12px',
            value: '12',
          },
          {
            title: '14px',
            value: '14',
          },
          {
            title: '16px',
            value: '16',
          },
          {
            title: '20px',
            value: '20',
          },
          {
            title: '24px',
            value: '24',
          },
        ],
      },
      title: 'Font Size',
      type: 'string',
    },
    {
      name: 'weight',
      options: {
        list: [
          {
            title: 'Regular',
            value: 'regular',
          },
          {
            title: 'Medium',
            value: 'medium',
          },
          {
            title: 'Semi-Bold',
            value: 'semi-bold',
          },
          {
            title: 'Bold',
            value: 'bold',
          },
        ],
      },
      title: 'Font Weight',
      type: 'string',
    },
    {
      name: 'decorator',
      options: {
        list: [
          {
            title: 'Underline',
            value: 'underline',
          },
        ],
      },
      title: 'Decorator',
      type: 'string',
    },
  ],
  name: 'linkOptions',
  options: {
    collapsible: true,
  },
  title: 'Links Options',
  type: 'document',
};
