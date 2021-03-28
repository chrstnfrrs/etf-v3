import { MdTitle } from "react-icons/md";

export default {
  name: 'pageHeading',
  title: 'Page Heading',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => ({
      title: selection.title,
      media: MdTitle,
    }),
  }
}