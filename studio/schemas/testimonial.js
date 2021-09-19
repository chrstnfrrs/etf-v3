export default {
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      rows: 4,
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
};
