import { JSX } from 'react';
import { StyledInputControl } from '@/_styled/Form/InputControl.styled';

interface InputControlProps {
  children?: JSX.Element;
  labelText?: string;
}

const InputControl = ({ children, labelText }: InputControlProps) => {
  return (
    <StyledInputControl>
      <label htmlFor={children?.props.id}>{labelText}</label>
      {children}
    </StyledInputControl>
  );
};

export default InputControl;
