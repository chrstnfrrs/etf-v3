import * as React from 'react';
import styled from '@emotion/styled';

import {
  StyledRow,
  StyledColLeft,
  StyledColRight,
  StyledHeading,
  StyledSubHeading,
  StyledBtn,
} from './styled';

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
`;

const StyledImageFill = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 0.25rem;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const LayoutSplitField = ({ display }) => {
  const Component = {
    Error: () => {
      // eslint-disable-next-line no-console
      console.error('Invalid split section type.');

      return <div />;
    },
    LayoutSplitContent: () => (
      <>
        <StyledHeading>{display[0].heading}</StyledHeading>
        <StyledSubHeading>{display[0].subheading}</StyledSubHeading>
        <StyledBtn>
          <a href={display[0].link.route}>{display[0].link.text}</a>
        </StyledBtn>
      </>
    ),
    MainImage: () => (
      <StyledImageWrapper>
        <StyledImageFill src={display[0].asset.url} />
      </StyledImageWrapper>
    ),
  };

  const Display = Component[display[0]?.__typename] || Component.Error;

  return <Display />;
};

const LayoutSplit = ({ data: { left, right } }) => {
  return (
    <StyledRow>
      <StyledColLeft mobile={left.mobile}>
        <LayoutSplitField {...left} />
      </StyledColLeft>
      <StyledColRight mobile={right.mobile}>
        <LayoutSplitField {...right} />
      </StyledColRight>
    </StyledRow>
  );
};

export { LayoutSplit };
