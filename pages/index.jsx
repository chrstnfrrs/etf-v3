import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

const Page = () => {
  return (
    <StyledContainer>
      <strong>{'Coming Soon'}</strong>
    </StyledContainer>
  );
};

export default Page;
