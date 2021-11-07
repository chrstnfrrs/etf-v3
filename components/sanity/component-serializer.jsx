import React from 'react';

import { Hero } from '../cookbook/hero';
import { RowSection } from '../cookbook/row-section';
import { LayoutSplit } from '../cookbook/layout-split';
import { DescriptionListSection } from '../cookbook/description-list-section';

const Components = {
  DescriptionListSection,
  Hero,
  LayoutSplit,
  Row: RowSection,
};

const InvalidSection = () => <div />;

const PageSerializer = ({ sections }) => {
  return (
    <>
      {sections.map((section) => {
        const SectionComponent =
          Components?.[section.__typename] || InvalidSection;

        return <SectionComponent data={section} key={section._key} />;
      })}
    </>
  );
};

export { PageSerializer };
