import { MdFormatListBulleted } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keyValuePairs',
      of: [{ type: 'keyValuePair' }],
      title: 'Key Value Pairs',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdFormatListBulleted,
  name: 'descriptionListSection',
  title: 'Description List Section',
  type: 'document',
};
