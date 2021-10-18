import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  min-height: 50vh;
  width: 100vw;
  margin: 0 -8rem;
  padding: 0 4rem;
  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
    margin: 2rem -2rem 0;
    min-height: auto;
  }
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1024px;
  justify-content: center;
  margin: 0 auto;
  grid-gap: 1rem;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: none;
    grid-gap: 2rem;
  }
`;

const StyledColLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  grid-column: 1/6;
  grid-row: 1/1;
  height: fit-content;
  @media only screen and (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: ${(props) => (props.mobile === 'top' ? '1' : '2')};
  }
`;

const StyledColRight = styled.div`
  display: block;
  overflow: hidden;
  grid-column: 7/12;
  grid-row: 1/1;
  height: fit-content;
  @media only screen and (max-width: 768px) {
    grid-column: 1/-1;
    grid-row: ${(props) => (props.mobile === 'top' ? '1' : '2')};
  }
`;

const StyledHeading = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  overflow-wrap: anywhere;
  margin-bottom: 1rem;
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    font-weight: 300;
  }
`;

const StyledSubHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  overflow-wrap: anywhere;
  margin-bottom: 3rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 300;
  }
`;

const StyledImageWrapper = styled.div`
  border-radius: 1rem;
  display: block;
  overflow: hidden;
  position: relative;
`;

const StyledBtn = styled.div`
  border-radius: 0.25rem;
  display: block;
  background: #000;
  color: #fff;
  width: fit-content;
  padding: 0.5rem 1rem;
`;

const LayoutSplitField = ({ display, mobile }) => {
  console.log('display', display);
  const Component = {
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
      <div>
        <StyledImageWrapper>
          <Image
            height={
              display[0].asset.metadata.dimensions.height ||
              display[0].hotspot?.height
            }
            layout='responsive'
            src={display[0].asset.url}
            width={
              display[0].asset.metadata.dimensions.width ||
              display[0].hotspot?.width
            }
          />
        </StyledImageWrapper>
      </div>
    ),
  };

  const Display = Component[display[0]?.__typename] || 'asdf';

  return <Display />;
};

const LayoutSplit = ({ left, right }) => {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledColLeft mobile={left.mobile}>
          <LayoutSplitField {...left} />
        </StyledColLeft>
        <StyledColRight mobile={right.mobile}>
          <LayoutSplitField {...right} />
        </StyledColRight>
      </StyledRow>
    </StyledContainer>
  );
};

export { LayoutSplit };
