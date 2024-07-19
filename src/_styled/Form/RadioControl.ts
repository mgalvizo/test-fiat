'use client';
import styled from 'styled-components';

const StyledRadioControlText = styled.strong`
  color: var(--black);
  text-transform: uppercase;
  font-weight: var(--x-bold);
  letter-spacing: 0.2rem;
  font-family: inherit;
`;

const StyledRadioControl = styled.div`
  flex: 1;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--web-margin-xs);
    border: 1px solid var(--red);
    background-color: var(--white);
    cursor: pointer;
    text-align: center;
    height: var(--radio-ht-s);

    &:hover {
      background-color: var(--red);

      ${StyledRadioControlText} {
        color: var(--white);
      }

      svg {
        fill: var(--white);
      }
    }
  }

  input[type='radio']:checked + label {
    background-color: var(--red);

    ${StyledRadioControlText} {
      color: var(--white);
    }

    svg {
      fill: var(--white);
    }
  }

  // 768px
  @media only screen and (min-width: 48em) {
    label {
      flex-direction: row;
      gap: var(--web-margin-xl);
      height: var(--radio-ht-m);
    }
  }
`;

export { StyledRadioControl, StyledRadioControlText };
