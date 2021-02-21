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
      name: 'leftLinks',
      title: 'Left Links',
      type: 'array',
      of: [{type:'link'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'rightLinks',
      title: 'Right Links',
      type: 'array',
      of: [{type:'link'}],
      validation: Rule => Rule.required(),
    },
  ],
}