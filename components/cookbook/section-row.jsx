import React from 'react';
import styled from '@emotion/styled';
import { ASection, AH3, ARow } from 'aspire-components-react';

const StyledRow = styled(ARow)`
  flex-wrap: wrap;
  gap: 4rem;
`;

const StyledTitle = styled(AH3)`
  padding: 4rem 0;
`;

// const StyledBody = styled(AP)`
//   -webkit-line-clamp: 4;
//   overflow: hidden;
//   text-overflow: clip;
//   -webkit-box-orient: vertical;
//   display: -webkit-box;
// `;
const Components = {
  calendly: () => <p>calendly</p>,
  testimonials: () => <p>Testimonial</p>,
};

const SectionRow = (props) => {
  const cards = props.data[props.type];
  const CardComponent = Components[props.type];
  console.log('cards', cards);

  return (
    <ASection>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledRow>
        {cards?.map(({ _key, ...card }) => (
          <CardComponent key={_key} {...card} />
        ))}
      </StyledRow>
    </ASection>
  );
};

export { SectionRow };
