import React from 'react';
import styled from '@emotion/styled';

import {
  StyledContainer,
  StyledHeading,
  StyledH3,
  StyledWrapper,
  StyledRow,
  StyledSpacer,
  StyledPreview,
} from './styled';

const StyledCardWrapper = styled.div`
  display: ${(props) => {
    if (props.index * 3 > 12) {
      return 'none';
    }

    return 'flex';
  }};
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem;
  border-radius: 1rem 0.25rem 1rem 0.25rem;
  grid-column: ${(props) => {
    const end = props.index * 3 + 1;
    const start = end - 3;

    return `${start}/${end}`;
  }};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.index <= 2 ? 'flex' : 'none')};
    grid-column: 1/-1;
  }
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

const CardComponent = ({ data, index }) => {
  const preview = data.preview;
  const heading = data.title || data.name;

  return (
    <StyledCardWrapper index={index}>
      <StyledH3>{heading}</StyledH3>
      <StyledPreview>{preview}</StyledPreview>
    </StyledCardWrapper>
  );
};

const RowSection = ({ data: { title, cards } }) => {
  return (
    <div>
      <StyledHeading>{title}</StyledHeading>
      <StyledSpacer size='1rem' sizeMobile='0.5rem' />
      <StyledRow align='flex-start'>
        {cards?.map(({ _key, ...card }, index) => (
          <CardComponent data={card} index={index + 1} key={_key} />
        ))}
      </StyledRow>
    </div>
  );
};

export { RowSection };
