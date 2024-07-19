import { JSX } from 'react';
import {
  StyledCheckbox,
  StyledCheckboxControl,
  StyledCheckboxControlText,
} from '@/_styled/Form/CheckboxControl';

interface CheckboxControlProps {
  children?: JSX.Element;
  labelText: string | JSX.Element;
}

const CheckboxControl = ({ children, labelText }: CheckboxControlProps) => {
  return (
    <StyledCheckboxControl>
      {children}
      <label htmlFor={children?.props.id}>
        <StyledCheckbox></StyledCheckbox>
        <StyledCheckboxControlText>{labelText}</StyledCheckboxControlText>
      </label>
    </StyledCheckboxControl>
  );
};

export default CheckboxControl;
