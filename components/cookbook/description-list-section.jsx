import * as React from 'react';

import {
  StyledSubHeading,
  StyledH3,
  StyledPreview,
  StyledEntry,
  StyledBtn,
  StyledSpacer,
} from './styled';

const DescriptionListSection = ({
  data: { title, keyValuePairs, callToAction },
}) => {
  return (
    <div>
      <StyledSubHeading>{title}</StyledSubHeading>
      {keyValuePairs.map(({ key, value, _key }) => (
        <StyledEntry key={_key}>
          <StyledH3>{key}</StyledH3>
          <StyledPreview>{value}</StyledPreview>
        </StyledEntry>
      ))}
      {Boolean(callToAction) && (
        <>
          <StyledSpacer size='0.5rem' />
          <StyledBtn>
            <a href={callToAction.route}>{callToAction.text}</a>
          </StyledBtn>
        </>
      )}
    </div>
  );
};

export { DescriptionListSection };
