import * as React from 'react';
import { ABox, AInput, ALabel, ATextArea } from 'aspire-components-react';

type OnBlur = (
  // eslint-disable-next-line no-unused-vars
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;
interface IInput {
  label?: string;
  name: string;
  id?: string;
  onBlur?: OnBlur;
  placeholder?: string;
}

interface ITextArea extends IInput {
  rows?: number;
}

const ETFInput: React.FC<IInput> = ({
  label,
  placeholder,
  name,
  id,
  ...props
}) => {
  return (
    <ABox align='stretch' width='full'>
      {label && <ALabel htmlFor={name}>{label}</ALabel>}
      <AInput id={name} name={name} placeholder={placeholder} {...props} />
    </ABox>
  );
};

const ETFTextArea: React.FC<ITextArea> = ({
  label,
  placeholder,
  name,
  id,
  rows,
  ...props
}) => {
  return (
    <ABox align='stretch' width='full'>
      {label && <ALabel htmlFor={id}>{label}</ALabel>}
      <ATextArea
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        {...props}
      />
    </ABox>
  );
};

export { ETFInput, ETFTextArea };
