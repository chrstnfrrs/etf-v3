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
      {/* <AInput
        label={'Email'}
        placeholder={'example@example.com'}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>Here</button> */}
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </AContainer>
  );
};

export default Contact;
