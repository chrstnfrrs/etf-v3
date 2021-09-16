import { MdViewHeadline } from "react-icons/md";

export default {
  name: 'homePage',
  title: 'Home',
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
      name: 'sectionTestimonial',
      title: 'Testimonial Section',
      type: 'sectionTestimonial',
      validation: Rule => Rule.required(),
    },
  ],
}