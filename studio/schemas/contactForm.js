import { MdEmail } from "react-icons/md";

export default {
  name: 'contactForm',
  title: 'Contact Form',
  type: 'document',
  fields: [
    {
      name: 'submit',
      title: 'Submit Button',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    prepare: (selection) => ({
      title: 'Contact Form',
      media: MdEmail
    }),
  }
}