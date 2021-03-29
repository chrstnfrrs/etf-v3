import React, { useState } from 'react';

import {
  PlaceholderButton,
  PlaceholderForm,
  PlaceholderSpacer,
} from '../placeholders';

import { PlaceholderInput, PlaceholderTextArea } from './input';

const ContactForm = ({ submit, ...props }): JSX.Element => {
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
        rows={5}
      />
      <PlaceholderSpacer />
      <PlaceholderButton>{submit}</PlaceholderButton>
    </PlaceholderForm>
  );
};

export { ContactForm };
