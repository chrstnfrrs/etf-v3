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
      name: 'callToAction',
      title: 'Page Call To Action',
      type: 'contentPreview',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'links',
      of: [{ type: 'link' }],
      title: 'Contact Links',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactForm',
      title: 'Contact Form',
      type: 'contactForm',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'pageContact',
  title: 'Contact Page',
  type: 'document',
};
