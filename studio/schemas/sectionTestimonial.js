import { MdViewHeadline } from "react-icons/md";

export default {
  name: 'sectionTestimonial',
  title: 'Testimonial Section',
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
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {type:'testimonial'},
      ],
      validation: Rule => Rule.required(),
    },
  ],
}