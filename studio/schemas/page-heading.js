import { MdTitle } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'pageHeading',
  preview: {
    prepare: (selection) => ({
      media: MdTitle,
      title: selection.title,
    }),
    select: {
      title: 'title',
    },
  },
  title: 'Page Heading',
  type: 'document',
};
