export default {
  name: 'pageContact',
  title: 'Contact Page',
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
      name: 'callToAction',
      title: 'Page Call To Action',
      type: 'contentPreview',
      validation: Rule => Rule.required(),
    },
    {
      name: 'links',
      title: 'Contact Links',
      type: 'array',
      of: [{type:'link'}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'contactForm',
      title: 'Contact Form',
      type: 'contactForm',
      validation: Rule => Rule.required(),
    },
  ],
}