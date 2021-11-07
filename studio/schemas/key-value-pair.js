export default {
  fields: [
    {
      name: 'key',
      title: 'Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'value',
      rows: 4,
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
  // icon: MdViewHeadline,
  name: 'keyValuePair',
  title: 'Key Value',
  type: 'document',
};
