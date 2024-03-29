export default {
  fields: [
    {
      name: 'name',
      title: 'Name',
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
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
};
