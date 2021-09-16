import React from 'react';
import { ABox, AInput, ALabel, ATextArea } from 'aspire-components-react';

interface IInput {
  label?: string;
  name: string;
  id?: string;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
}

interface ITextArea extends IInput {
  rows?: number;
}

type TInput = (InputProps: IInput) => JSX.Element;
type TTextArea = (TextAreaProps: ITextArea) => JSX.Element;

const ETFInput: TInput = ({ label, placeholder, name, id, ...props }) => {
  return (
    <ABox align='stretch' width='full'>
      {label && <ALabel htmlFor={name}>{label}</ALabel>}
      <AInput id={name} name={name} placeholder={placeholder} {...props} />
    </ABox>
  );
};

const ETFTextArea: TTextArea = ({
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
