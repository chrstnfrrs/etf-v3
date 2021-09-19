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
      name: 'testimonials',
      of: [{ type: 'testimonial' }],
      title: 'Testimonials',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdViewHeadline,
  name: 'sectionTestimonial',
  title: 'Testimonial Section',
  type: 'document',
};
