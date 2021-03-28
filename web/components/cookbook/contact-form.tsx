import React, { useState } from 'react';

import { PlaceholderForm } from '../placeholders';

import { PlaceholderInput, PlaceholderTextArea } from './input';

const ContactForm = (): JSX.Element => {
  const [input, setInput] = useState({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  return (
    <PlaceholderForm>
      <PlaceholderInput
        label='Name'
        name='name'
        onChange={handleChange}
        placeholder='Your Name'
      />
      <PlaceholderInput
        label='Email'
        name='email'
        onChange={handleChange}
        placeholder='Email Address'
      />
      <PlaceholderInput
        label='Subject'
        name='subject'
        onChange={handleChange}
        placeholder='Email Subject'
      />
      <PlaceholderTextArea
        label='Message'
        name='message'
        onChange={handleChange}
        placeholder='Start typing here...'
      />
      {JSON.stringify(input)}
    </PlaceholderForm>
  );
};

export { ContactForm };
