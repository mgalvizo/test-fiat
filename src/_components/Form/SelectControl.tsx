import { JSX } from 'react';
import { StyledSelectControl } from '@/_styled/Form/SelectControl.styled';

interface SelectControlProps {
  children?: JSX.Element;
  labelText?: string;
}

const SelectControl = ({ children, labelText }: SelectControlProps) => {
  return (
    <StyledSelectControl>
      <label htmlFor={children?.props.id}>{labelText}</label>
      {children}
    </StyledSelectControl>
  );
};

export default SelectControl;
