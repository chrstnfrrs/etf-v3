import { MdViewAgenda } from 'react-icons/md';

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
  icon: MdViewAgenda,
  name: 'layoutSplit',
  preview: {
    prepare: (selection) => {
      const title = `Split Layout: ${
        selection?.left?.display?.[0]?._type || 'Missing left field'
      } and ${selection?.right?.display?.[0]?._type || 'Missing right field'}`;

      return {
        title,
      };
    },
    select: {
      left: 'left',
      right: 'right',
    },
  },
  title: 'Split Layout',
  type: 'document',
};
