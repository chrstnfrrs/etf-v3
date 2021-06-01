import * as React from 'react';
import { ABtn, AForm, ASpacer } from 'aspire-components-react';
import styled from '@emotion/styled';

// import * as Types from '../../types/index.d';

import { ETFInput, ETFTextArea } from './etf-inputs';

const Text = styled.strong`
  font-size: 0.875rem;
  padding-top: 0.25rem;
  color: #dc2626; // red-600
`;

type Props = {
  submit: string;
};

const ETFContactForm: React.FC<Props> = (props) => {
  const [input, setInput] = React.useState({
    email: '',
    message: '',
    name: '',
    subject: '',
  });
  const [emailError, setEmailError] = React.useState('');
  const [submitError, setSubmitError] = React.useState('');

  const validateEmailInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailError('');

    if (!/^\S+@\S+\.\S+$/u.test(e.target.value)) {
      setEmailError('Please use a valid email address.');
    }
  };

  const validateInput = () => {
    if (
      input.name.length &&
      input.email.length &&
      input.subject.length &&
      input.message.length &&
      /^\S+@\S+\.\S+$/u.test(input.email)
    ) {
      console.log('here');
      setSubmitError('');
    } else {
      setSubmitError('Please provide all fields.');
    }

    console.log(input);
    console.log(input.name.length);
    console.log(input.email.length);
    console.log(input.subject.length);
    console.log(input.message.length);
    console.log(/^\S+@\S+\.\S+$/u.test(input.email));
  };

  const handleChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.name === 'email') {
      validateEmailInput(e);
    }

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitContactForm = () => {
    validateInput();
  };

  return (
    <AForm data-testid='contact-form'>
      <ETFInput
        id='name-input'
        label='Name'
        name='name'
        onBlur={handleChange}
        placeholder='Your Name'
      />
      <ETFInput
        id='email-input'
        label='Email'
        name='email'
        onBlur={handleChange}
        placeholder='Email Address'
      />
      {Boolean(emailError.length) && <Text>{emailError}</Text>}
      <ETFInput
        id='subject-input'
        label='Subject'
        name='subject'
        onBlur={handleChange}
        placeholder='Email Subject'
      />
      <ETFTextArea
        id='message-input'
        label='Message'
        name='message'
        onBlur={handleChange}
        placeholder='Start typing here...'
        rows={5}
      />
      <ASpacer size='4' />
      <ABtn onClick={submitContactForm}>{props.submit}</ABtn>
      {Boolean(submitError.length) && <Text>{submitError}</Text>}
    </AForm>
  );
};

export type { Props };
export { ETFContactForm };
