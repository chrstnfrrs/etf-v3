import React from 'react';

import { Hero } from '../cookbook/hero';
import { SectionRow } from '../cookbook/section-row';
import { LayoutSplit } from '../cookbook/layout-split';

const Components = {
  Hero,
  LayoutSplit,
  SectionRow,
};

const InvalidSection = () => 'Invalid Section';

const PageSerializer = ({ data, sections }) => {
  console.log('sections', sections);

  return (
    <>
      {sections.map((section) => {
        const SectionComponent =
          Components?.[section.__typename] || InvalidSection;

        return (
          <SectionComponent data={section} key={section._key} {...section} />
        );
      })}
    </>
  );
};

export { PageSerializer };
