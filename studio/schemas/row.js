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
      name: 'cards',
      of: [{ type: 'testimonial' }, { type: 'service' }],
      title: 'Cards',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdViewHeadline,
  name: 'row',
  title: 'Row Section',
  type: 'document',
};
