import styled from '@emotion/styled';

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
  align-items: center;
  justify-content: flex-start;
  padding: 64px 128px;
  @media (max-width: 768px) {
    padding: 16px 32px;
  }
`;

const PlaceholderBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
`;

const PlaceholderRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props?.justify || 'center'};
`;

const PlaceholderCol = styled.div`
  display: flex;
  justify-content: ${(props) => props?.justify || 'flex-start'};
  flex-direction: column;
  width: fill-available;
  margin: 16px;
  max-width: 512px;
  min-width: 256px;
`;

const PlaceholderH1 = styled.h1`
  line-height: 2;
`;
const PlaceholderH3 = styled.h3`
  line-height: 1.5;
`;

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

const PlaceholderChip = styled.p`
  padding: 0 16px 0 0;
`;

export {
  PlaceholderNav,
  PlaceholderLink,
  PlaceholderContainer,
  PlaceholderBox,
  PlaceholderRow,
  PlaceholderCol,
  PlaceholderH1,
  PlaceholderH3,
  PlaceholderForm,
  PlaceholderButton,
  PlaceholderSpacer,
  PlaceholderChip,
};
