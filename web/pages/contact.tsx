import React, { ReactElement, useState } from 'react';

import { AContainer, AHeading, AInput } from 'aspire-components-react';

const Contact = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    console.log({
      name,
      email,
      subject,
      message,
    });
    const data = await fetch('https://www.erintallardfitness.com/.netlify/functions/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    console.log('data', data);
  };

  return (
    <AContainer>
      <AHeading>Contact Us</AHeading>
      <AInput
        label={'Name'}
        placeholder={'example@example.com'}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <AInput
        label={'Email'}
        placeholder={'example@example.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AInput
        label={'Subject'}
        placeholder={'example@example.com'}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <AInput
        label={'Message'}
        placeholder={'example@example.com'}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendEmail}>Here</button>
    </AContainer>
  );
};

export default Contact;
