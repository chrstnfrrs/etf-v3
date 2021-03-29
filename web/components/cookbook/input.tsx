import React from 'react';
import styled from '@emotion/styled';

interface IInput {
  label?: string;
  name: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
}

interface ITextArea extends IInput {
  rows?: number;
}

type TInput = (InputProps: IInput) => JSX.Element;
type TTextArea = (TextAreaProps: ITextArea) => JSX.Element;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 512px;
  width: fill-available;
`;

const TheLabel = styled.label`
  font-size: 0.875rem;
  margin: 16px 0 8px;
`;

const TheInput = styled.input`
  border: 1px solid black;
  border-radius: 0px;
  padding: 8px 16px;
  font-size: 1rem;
  outline: none;
  font-family: Roboto;
`;

const TheTextArea = styled.textarea`
  border: 1px solid black;
  border-radius: 0px;
  padding: 8px 16px;
  font-size: 1rem;
  outline: none;
  font-family: Roboto;
  resize: vertical;
`;

const PlaceholderInput: TInput = ({ label, placeholder, name, ...props }) => {
  return (
    <InputWrapper>
      {label && <TheLabel>{label}</TheLabel>}
      <TheInput name={name} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

const PlaceholderTextArea: TTextArea = ({
  label,
  placeholder,
  name,
  rows,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && <TheLabel>{label}</TheLabel>}
      <TheTextArea
        name={name}
        placeholder={placeholder}
        rows={rows}
        {...props}
      />
    </InputWrapper>
  );
};

export { PlaceholderInput, PlaceholderTextArea };
