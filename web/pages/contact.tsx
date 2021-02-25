import React, { ReactElement, useState } from 'react';
import { GetStaticProps } from 'next';
import { ABox, AContainer, AHeading, AInput } from 'aspire-components-react';

import withLayout from '../components/App/withLayout';
import { getGraphqlClient } from '../graphql/utils';
import { getLinks } from '../utils/menu';

const Contact = (): ReactElement => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = async () =>
    await fetch('https://www.erintallardfitness.com/.netlify/functions/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

  return (
    <AContainer>
      <AHeading>Contact Us</AHeading>
      <ABox width={'512'}>
        <AInput
          label={'Name'}
          placeholder={'Name'}
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <AInput
          label={'Email'}
          placeholder={'Email'}
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <AInput
          label={'Subject'}
          placeholder={'Subject'}
          value={input.subject}
          onChange={(e) => setInput({ ...input, subject: e.target.value })}
        />
        <AInput
          label={'Message'}
          placeholder={'Message'}
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
        />
        <button onClick={sendEmail}>Here</button>
      </ABox>
    </AContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphqlClient();

  return {
    props: {
      ...(await getLinks(client)),
    },
  };
};

export default withLayout(Contact);
