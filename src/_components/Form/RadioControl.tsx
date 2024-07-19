import { JSX } from 'react';
import {
  StyledRadioControl,
  StyledRadioControlText,
} from '@/_styled/Form/RadioControl';

interface RadioControlProps {
  children?: JSX.Element;
  labelText: string;
  icon?: JSX.Element;
}

const RadioControl = ({ children, labelText, icon }: RadioControlProps) => {
  return (
    <StyledRadioControl>
      {children}
      <label htmlFor={children?.props.id}>
        {icon}
        <StyledRadioControlText>{labelText}</StyledRadioControlText>
      </label>
    </StyledRadioControl>
  );
};

export default RadioControl;
