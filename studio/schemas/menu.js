export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Links',
      type: 'array',
      of: [{type:'link'}],
      validation: Rule => Rule.required(),
    },
  ],
}