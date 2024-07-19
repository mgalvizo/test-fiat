'use client';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  position: relative;
  width: var(--checkbox-sz);
  height: var(--checkbox-sz);
  border: 1px solid var(--checkbox-border-color);

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--checkmark-wt);
    height: var(--checkmark-ht);
    border: solid var(--black);
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    content: '';
  }
`;

const StyledCheckboxControl = styled.div`
  label {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: calc(var(--web-margin-xs) + var(--web-margin-s));
    font-size: var(--checkbox-fsz);
    font-weight: var(--regular);
    cursor: pointer;

    a:visited,
    a:link {
      color: var(--black);
      text-decoration: underline;
      font-weight: var(--bold);
    }
  }

  input[type='checkbox']:checked + label {
    ${StyledCheckbox} {
      &::after {
        opacity: 1;
      }
    }
  }

  // 768px
  @media only screen and (min-width: 48em) {
  }
`;

const StyledCheckboxControlText = styled.p``;

export { StyledCheckbox, StyledCheckboxControl, StyledCheckboxControlText };
