export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'route',
      title: 'Route',
      type: 'string',
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type:'hero'}
      ],
      validation: Rule => Rule.required(),
    },
  ],
}