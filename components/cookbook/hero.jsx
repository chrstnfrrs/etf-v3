import React from 'react';
import styled from '@emotion/styled';
import { ABtn, AH1, ASpan } from 'aspire-components-react';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -4rem -8rem 0;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: calc(100vh - 70px);
  background-size: cover !important;
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    ${(props) => (props.background ? `url(${props.background})` : 'white')}
      no-repeat center center scroll;
`;

const HomeH1 = styled(AH1)`
  z-index: 5;
  position: relative;
  padding-left: 4rem;
  margin-top: 20%;
  font-weight: 700;
  color: white;
`;

const Hero = (props) => (
  <HeroContainer background={props.heroImage.asset.url}>
    <HomeH1>{props.heading}</HomeH1>
    <ABtn
      backgroundColor='pink-900'
      color='white'
      padding='4y 6x'
      style={{ borderRadius: '0.5rem' }}
    >
      <ASpan fontSize='xl'>{props.button.text}</ASpan>
    </ABtn>
  </HeroContainer>
);

export { Hero };
