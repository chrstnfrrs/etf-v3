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
      name: 'sectionTestimonial',
      title: 'Testimonial Section',
      type: 'sectionTestimonial',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdViewHeadline,
  name: 'homePage',
  title: 'Home',
  type: 'document',
};
