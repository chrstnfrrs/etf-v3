export default {
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'route',
      title: 'Route',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'route'
    }
  }
}