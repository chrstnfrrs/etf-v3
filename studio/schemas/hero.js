export default {
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'mainImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
};
