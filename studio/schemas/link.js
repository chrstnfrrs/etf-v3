import { MdStar } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'text',
      title: 'Text',
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
      name: 'linkOptions',
      title: 'Link Options',
      type: 'linkOptions',
    },
  ],
  name: 'link',
  preview: {
    prepare: (selection) => ({
      media: MdStar,
      subtitle: selection.subtitle,
      title: selection.title,
    }),
    select: {
      subtitle: 'route',
      title: 'text',
    },
  },
  title: 'Link',
  type: 'document',
};
