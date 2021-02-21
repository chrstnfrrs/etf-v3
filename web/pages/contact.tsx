import React, { ReactElement, useState } from 'react';

import { AContainer, AHeading, AInput } from 'aspire-components-react';

const Contact = (): ReactElement => {
  const [email, setEmail] = useState('');

  const sendEmail = () => {
    fetch('https://www.erintallardfitness.com/.netlify/functions/email').then((data) => {
      console.log(data);
    });
  };

  return (
    <AContainer>
      <AHeading>Contact Us</AHeading>
      <AInput
        label={'Email'}
        placeholder={'example@example.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>Here</button>
    </AContainer>
  );
};

export default Contact;
