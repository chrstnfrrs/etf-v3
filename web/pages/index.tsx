import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {ABtn} from 'aspire-components-react'

export default function Home() {
  return (
    <div className={styles.container}>
      <ABtn align={'center'} justify={'center'}>{'Hello World'}</ABtn>
    </div>
  )
}
