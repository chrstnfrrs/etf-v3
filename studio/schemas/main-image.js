export default {
  fields: [
    {
      description: 'Important for SEO and accessiblity.',
      name: 'alt',
      options: {
        isHighlighted: true,
      },
      title: 'Alternative text',
      type: 'string',
      validation: (Rule) =>
        Rule.error('You have to fill out the alternative text.').required(),
    },
  ],
  name: 'mainImage',
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
  title: 'Image',
  type: 'image',
};
