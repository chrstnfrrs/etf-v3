export default {
  fields: [
    {
      name: 'display',
      of: [
        { type: 'mainImage' },
        {
          fields: [
            {
              name: 'content',
              title: 'Content',
              type: 'contentMain',
            },
          ],
          name: 'content',
          type: 'object',
        },
      ],
      title: 'Display',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(1).error('Must have one item'),
    },
    // {
    //   name: 'mobile',
    //   options: {
    //     list: [
    //       {
    //         title: 'Top',
    //         value: 'top',
    //       },
    //       {
    //         title: 'Bottom',
    //         value: 'bottom',
    //       },
    //     ],
    //   },
    //   title: 'Mobile Display Order',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    // },
  ],
  name: 'layoutSplitFields',
  title: 'Split Layout Fields',
  type: 'document',
};
