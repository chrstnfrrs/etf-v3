import { MdEmail } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'submit',
      title: 'Submit Button',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  name: 'contactForm',
  preview: {
    prepare: () => ({
      media: MdEmail,
      title: 'Contact Form',
    }),
  },
  title: 'Contact Form',
  type: 'document',
};
