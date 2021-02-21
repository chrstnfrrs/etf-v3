import React from 'react';
import { AHero, AHeading } from 'aspire-components-react';
import { HeroSection } from '../../types/home';

const HomeHero: React.FC<HeroSection> = (section: HeroSection) => (
  <AHero key={section._key} backgroundImage={section.heroImage?.asset.url}>
    <AHeading>{section.heading}</AHeading>
  </AHero>
);

export default HomeHero;
