export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    },
  ],
}