import { MdViewHeadline } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'route',
      title: 'Route',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      of: [{ type: 'pageHeading' }, { type: 'hero' }, { type: 'contactForm' }],
      title: 'Page Sections',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdViewHeadline,
  name: 'pages',
  title: 'Other Pages',
  type: 'document',
};
