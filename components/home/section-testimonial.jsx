import React from 'react';
import styled from '@emotion/styled';
import {
  AH3,
  ASection,
  ARow,
  ACard,
  AP,
  AStrong,
} from 'aspire-components-react';

const StyledSection = styled(ASection)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e9ee;
`;

const StyledH3 = styled(AH3)`
  margin: 0;
  font-size: 3rem;
  padding: 4rem 0 3rem;
  color: #0a5999;
`;

const StyledRow = styled(ARow)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 4rem 4rem 4rem;
`;

const StyledCard = styled(ACard)`
  display: flex;
  flex-direction: column;
  width: 16rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #f7f8fd;
  margin: 1rem 4rem;
`;

const StyledP = styled(AP)`
  margin: 0;
  text-align: left;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #303030;
`;

const StyledStrong = styled(AStrong)`
  font-size: 1.15rem;
  color: #0c6fc0;
`;

const CardTestimonial = ({ name, text }) => {
  return (
    <StyledCard>
      <StyledP>{text}</StyledP>
      <StyledStrong>{name}</StyledStrong>
    </StyledCard>
  );
};

const SectionTestimonial = ({ testimonials, title }) => {
  return (
    <StyledSection>
      <StyledH3>{title}</StyledH3>
      <StyledRow>
        {testimonials.map(({ _key, ...testimonial }) => (
          <CardTestimonial key={_key} {...testimonial} />
        ))}
      </StyledRow>
    </StyledSection>
  );
};

export { SectionTestimonial };
