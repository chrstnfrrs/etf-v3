import React, { ReactElement, useState } from 'react';

import { AContainer, AHeading, AInput } from 'aspire-components-react';

const Contact = (): ReactElement => {
  const [input, setInput] = useState({
    email: '',
    message: '',
    name: '',
    subject: '',
  });

  const sendEmail = async () => {
    const data = await fetch('https://www.erintallardfitness.com/.netlify/functions/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    console.log('data', data);
  };

  return (
    <AContainer>
      <AHeading>Contact Us</AHeading>
      <AInput
        label={'Name'}
        placeholder={'example@example.com'}
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
      />
      <AInput
        label={'Email'}
        placeholder={'example@example.com'}
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
      />
      <AInput
        label={'Subject'}
        placeholder={'example@example.com'}
        value={input.subject}
        onChange={(e) => setInput({ ...input, subject: e.target.value })}
      />
      <AInput
        label={'Message'}
        placeholder={'example@example.com'}
        value={input.message}
        onChange={(e) => setInput({ ...input, message: e.target.value })}
      />
      <button onClick={sendEmail}>Here</button>
    </AContainer>
  );
};

export default Contact;
