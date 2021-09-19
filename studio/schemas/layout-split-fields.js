export default {
  fields: [
    {
      name: 'type',
      of: [{ type: 'link' }],
      title: 'Display Type',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mobile',
      options: {
        list: [
          {
            title: 'Top',
            value: 'top',
          },
          {
            title: 'Bottom',
            value: 'bottom',
          },
        ],
      },
      title: 'Mobile Display Order',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'layoutSplitFields',
  title: 'Split Layout Fields',
  type: 'document',
};
