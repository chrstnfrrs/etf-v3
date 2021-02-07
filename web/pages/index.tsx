import { ABtn } from 'aspire-components-react';
import { ReactElement } from 'react';

import styles from '../styles/Home.module.css';

const Home = (): ReactElement => {
  return (
    <div className={styles.container}>
      <ABtn align={'center'} justify={'center'}>
        {'Hello World'}
      </ABtn>
    </div>
  );
};

export default Home;
