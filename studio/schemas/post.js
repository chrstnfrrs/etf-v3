import { MdCreate } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preview',
      rows: 4,
      title: 'Preview',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'contentMain',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'title',
      },
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
  ],
  icon: MdCreate,
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
};
