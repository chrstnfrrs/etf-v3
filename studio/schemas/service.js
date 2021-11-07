export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preview',
      rows: 4,
      title: 'Preview',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'service',
  title: 'Service',
  type: 'document',
};
