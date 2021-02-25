export default {
  name: 'linkOptions',
  title: 'Links Options',
  type: 'document',
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
}
