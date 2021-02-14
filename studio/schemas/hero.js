export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'mainImage',
      validation: Rule => Rule.required(),
    },
  ],
}