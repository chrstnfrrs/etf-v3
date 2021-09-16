// {page.sections.map((section, index) => {
//   if (section.__typename === 'Hero') {
//     // eslint-disable-next-line react/jsx-key
//     return <ETFHero {...section} key={index} />;
//   } else if (section.__typename === 'SectionRow') {
//     return (
//       <ASection key={index}>
//         <ABox padding='8y'>
//           <AH3>{section.title}</AH3>
//         </ABox>
//         <ARow style={MissingStylesARow} width='full'>
//           {section.type === 'Testimonials'
//             ? testimonials.map(({ name, text }, ti) => (
//                 <ACard key={ti} padding='4' width='64'>
//                   <ABodyText>{text}</ABodyText>
//                   <AH4 fontSize='lg'>{name}</AH4>
//                 </ACard>
//               ))
//             : null}
//         </ARow>
//       </ASection>
//     );
//   }

//   return null;
// })}
import React from 'react';

import { Hero } from '../cookbook/hero';
import { SectionRow } from '../cookbook/section-row';

const Components = {
  Hero,
  SectionRow,
};

const PageSerializer = ({ data, sections }) => {
  console.log('sections', sections);

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = Components?.[section.__typename];

        return <SectionComponent data={data} key={section._key} {...section} />;
      })}
    </>
  );
};

export { PageSerializer };
