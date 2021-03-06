import { MdViewHeadline } from "react-icons/md";

export default {
  name: 'pages',
  title: 'Other Pages',
  type: 'document',
  icon: MdViewHeadline,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Page Description',
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
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type:'pageHeading'},
        {type:'hero'},
        {type:'contactForm'},
      ],
      validation: Rule => Rule.required(),
    },
  ],
}