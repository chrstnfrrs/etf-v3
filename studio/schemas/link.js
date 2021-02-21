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
      name: 'decorator',
      title: 'Decorator',
      type: 'string',
      options: {
        list: [
          { title: 'Underline', value: 'underline' },
        ]
      },
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'route'
    }
  }
}