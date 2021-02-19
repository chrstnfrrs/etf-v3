export default {
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: Rule => Rule.required(),
    },
  ],
}