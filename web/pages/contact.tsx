import React, { ReactElement, useState } from 'react';

import { AContainer, AHeading, AInput } from 'aspire-components-react';

const Contact = (): ReactElement => {
  const [email, setEmail] = useState('');

  return (
    <AContainer>
      <AHeading>Contact Us</AHeading>
      <AInput
        label={'Email'}
        placeholder={'example@example.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </AContainer>
  );
};

export default Contact;
