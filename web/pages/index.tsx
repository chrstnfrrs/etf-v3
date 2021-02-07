import React from 'react';
import { GetStaticProps } from 'next';
// import { ABtn } from 'aspire-components-react';
import { ReactElement } from 'react';
import { gql, useQuery } from '@apollo/client';

import styles from '../styles/Home.module.css';
import AppMenu from '../components/AppMenu';

const Home = (): ReactElement => {
  const { data, loading } = useQuery(gql`
    query Users {
      users {
        uuid
        id
        email
      }
    }
  `);

  if (loading) return <h1>loading...</h1>;

  if (data)
    return (
      <div>
        <h1>Hello</h1>
        <p>{JSON.stringify(data)}</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <AppMenu />
      {/* <ABtn align={'center'} justify={'center'}>
        {'Hello World'}
      </ABtn> */}
    </div>
  );
};

export default Home;
