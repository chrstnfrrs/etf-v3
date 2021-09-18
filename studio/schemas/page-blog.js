export default {
  fields: [
    {
      description:
        'This field is used for SEO. It will appear in the tab and as the title for search results.',
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      description:
        'This field is used for SEO. It will appear as the description for search results.',
      name: 'description',
      title: 'Page Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'showPosts',
      title: 'Show Posts',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'pageBlog',
  title: 'Blog Page',
  type: 'document',
};
