export default {
  name: 'pageBlog',
  title: 'Blog Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      description: 'This field is used for SEO. It will appear in the tab and as the title for search results.',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'string',
      description: 'This field is used for SEO. It will appear as the description for search results.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'showPosts',
      title: 'Show Posts',
      type: 'boolean',
      validation: Rule => Rule.required(),
    },
  ],
}