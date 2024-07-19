'use client';
import styled from 'styled-components';

const StyledInputControl = styled.div`
  position: relative;

  label {
    display: block;
    margin-bottom: var(--web-margin-s);
    line-height: var(--label-lht);
    text-transform: uppercase;
    font-family: var(--font-lato);
    letter-spacing: 0.2rem;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    display: block;
    width: 100%;
    height: var(--input-sz);
    padding-left: var(--web-padding-s);
    padding-right: var(--web-padding-s);
    border: 1px solid var(--red);
    line-height: var(--input-sz);
    color: inherit;
    font-family: var(--font-lato);
    outline: none;
    font-size: inherit;

    &::placeholder {
      color: var(--black);
      opacity: 1;
      text-transform: uppercase;
      font-weight: var(--x-bold);
      letter-spacing: 0.2rem;
    }

    &:active,
    &:focus {
      border-color: var(--red);
    }
  }
`;

export { StyledInputControl };
