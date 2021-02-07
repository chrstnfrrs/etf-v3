import { ABtn } from 'aspire-components-react';
import { ReactElement } from 'react';

import styles from '../styles/Home.module.css';
import AppMenu from '../components/AppMenu';

const Home = (): ReactElement => {
  return (
    <div className={styles.container}>
      <AppMenu />
      <ABtn align={'center'} justify={'center'}>
        {'Hello World'}
      </ABtn>
    </div>
  );
};

export default Home;
