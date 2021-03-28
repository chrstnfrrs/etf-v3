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

type TInput = (InputProps: IInput) => JSX.Element;
type TTextArea = (TextAreaProps: IInput) => JSX.Element;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlaceholderInput: TInput = ({ label, placeholder, name, ...props }) => {
  return (
    <InputWrapper>
      {label && <label>{label}</label>}
      <input name={name} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

const PlaceholderTextArea: TTextArea = ({
  label,
  placeholder,
  name,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && <label>{label}</label>}
      <textarea name={name} placeholder={placeholder} {...props} />
    </InputWrapper>
  );
};

export { PlaceholderInput, PlaceholderTextArea };
