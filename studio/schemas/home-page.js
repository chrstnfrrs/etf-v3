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
      name: 'sections',
      of: [{ type: 'layoutSplit' }],
      title: 'Page Sections',
      type: 'array',
    },
    // {
    //   name: 'layoutSplit',
    //   title: 'Split Layout',
    //   type: 'layoutSplit',
    // },
    // {
    //   name: 'sectionTestimonial',
    //   title: 'Testimonial Section',
    //   type: 'sectionTestimonial',
    //   validation: (Rule) => Rule.required(),
    // },
  ],
  icon: MdViewHeadline,
  name: 'homePage',
  title: 'Home',
  type: 'document',
};
