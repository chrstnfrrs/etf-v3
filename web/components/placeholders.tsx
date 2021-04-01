import styled from '@emotion/styled';

import { ALLOW_ANY } from '../types/app';

const PlaceholderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #e5e5e5;
  padding: 0 16px;
`;

const PlaceholderLink = styled.a`
  color: #101010;
  padding: 16px 8px;
`;

const PlaceholderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 64px 128px;
  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;

const PlaceholderContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 64px 128px;
  height: 85vh;
  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;

const PlaceholderBox = styled.div`
  display: flex;
  flex-direction: ${(props: ALLOW_ANY) => props.direction || 'row'};
`;

const PlaceholderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props: ALLOW_ANY) => props?.justify || 'center'};
`;

const PlaceholderCol = styled.div`
  display: flex;
  justify-content: ${(props: ALLOW_ANY) => props?.justify || 'flex-start'};
  flex-direction: column;
  width: fill-available;
  margin: 16px;
  max-width: 512px;
  min-width: 256px;
`;

const PlaceholderH1 = styled.h1`
  line-height: 2;
`;
const PlaceholderH2 = styled.h2``;
const PlaceholderH3 = styled.h3`
  line-height: 1.5;
`;
const PlaceholderH4 = styled.h2``;
const PlaceholderH5 = styled.h2``;
const PlaceholderH6 = styled.h2``;
const PlaceholderStrong = styled.strong``;

const PlaceholderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 512px;
  width: fill-available;
`;

const PlaceholderButton = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 1px;
  outline: none;
  padding: 8px 64px;
  font-size: 1.075rem;
`;

const PlaceholderSpacer = styled.div`
  padding: 12px;
`;

const PlaceholderCard = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-radius: 1px;
  border: 1px solid black;
  overflow-wrap: anywhere;
  max-height: 256px;
  overflow: hidden;
`;

const PlaceholderGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;

const PlaceholderChip = styled.p`
  padding: 0 16px 0 0;
`;

export {
  PlaceholderNav,
  PlaceholderLink,
  PlaceholderContainer,
  PlaceholderContainerContact,
  PlaceholderBox,
  PlaceholderRow,
  PlaceholderCol,
  PlaceholderH1,
  PlaceholderH2,
  PlaceholderH3,
  PlaceholderH4,
  PlaceholderH5,
  PlaceholderH6,
  PlaceholderStrong,
  PlaceholderForm,
  PlaceholderButton,
  PlaceholderSpacer,
  PlaceholderCard,
  PlaceholderGrid,
  PlaceholderChip,
};
