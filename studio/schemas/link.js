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
    {
      name: 'decorators',
      title: 'Decorators',
      type: 'string',
      options: {
        list: [
          { title: 'Underlined', value: 'underlined' },
        ]
      },
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