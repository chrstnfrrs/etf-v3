export default {
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'button',
  title: 'Button',
  type: 'document',
};
