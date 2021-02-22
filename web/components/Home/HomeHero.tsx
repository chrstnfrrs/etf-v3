import React from 'react';
import { AHero, AHeading } from 'aspire-components-react';
import { HeroSection } from '../../types/home';

import styles from './HomeHero.module.css';

const HomeHero: React.FC<HeroSection> = (section: HeroSection) => (
  <AHero key={section._key} backgroundImage={section.heroImage?.asset.url} className={styles.homeHero}>
    <AHeading>{section.heading}</AHeading>
  </AHero>
);

export default HomeHero;
