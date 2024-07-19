'use client';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: var(--btn-wt);
  height: var(--btn-ht);
  border: 1px solid var(--red);
  color: var(--black);
  text-transform: uppercase;
  font-weight: var(--x-bold);
  letter-spacing: 0.2rem;
  font-family: inherit;
  font-size: inherit;
  background-color: var(--white);
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    color: var(--white);
    background-color: var(--red);
  }

  // 768px
  @media only screen and (min-width: 48em) {
    margin-right: initial;
    margin-top: auto;
  }
`;

export { StyledButton };
