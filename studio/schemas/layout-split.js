export default {
  fields: [
    {
      name: 'left',
      title: 'Left Display',
      type: 'layoutSplitFields',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'right',
      title: 'Right Display',
      type: 'layoutSplitFields',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'layoutSplit',
  title: 'Split Layout',
  type: 'document',
};
