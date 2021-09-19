import { MdMenu } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'links',
      of: [{ type: 'link' }],
      title: 'Links',
      type: 'array',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'links',
  preview: {
    prepare: (selection) => ({
      media: MdMenu,
      title: `Links: ${selection.title.map((title) => title.text).join(', ')}`,
    }),
    select: {
      title: 'links',
    },
  },
  title: 'Links',
  type: 'document',
};
