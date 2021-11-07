import styled from '@emotion/styled';

const StyledContainer = styled.div`
  width: 100vw;
  margin: 0 -8rem 6rem;
  padding: 0 4rem;
  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
    margin: 2rem -2rem 0;
    min-height: auto;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1024px;
  justify-content: space-between;
  margin: 0 auto;
  grid-gap: 1rem;
  align-items: ${(props) => props.align || 'center'};
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
  height: 100%;
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
  height: 100%;
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

const StyledH3 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  overflow-wrap: anywhere;
  margin-bottom: 1rem;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
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
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.15rem;
  cursor: pointer;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: auto;
  }
`;

const StyledSpacer = styled.div`
  padding: ${(props) => props.size || '1rem'};
  @media only screen and (max-width: 768px) {
    ${(props) => Boolean(props.sizeMobile) && `padding: ${props.sizeMobile}`};
  }
`;

const StyledPreview = styled.p`
  text-overflow: clip;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 6;
  -webkit-line-clamp: 6;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 144px;
  object-fit: cover;
  border-radius: 1rem 0.25rem 0 0;
`;

const StyledEntry = styled.div`
  padding-bottom: 1rem;
`;

export {
  StyledContainer,
  StyledWrapper,
  StyledRow,
  StyledColLeft,
  StyledColRight,
  StyledHeading,
  StyledSubHeading,
  StyledH3,
  StyledImageWrapper,
  StyledBtn,
  StyledSpacer,
  StyledPreview,
  StyledImage,
  StyledEntry,
};
