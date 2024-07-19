'use client';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledDropdownPanel = styled.div`
  display: block;
  position: relative;
  padding-left: var(--web-padding-s);
  padding-right: var(--web-padding-xl);
  border: 1px solid var(--red);
  width: 100%;
  height: var(--input-sz);
  text-transform: uppercase;
  font-weight: var(--x-bold);
  letter-spacing: 0.2rem;
  line-height: var(--input-sz);
  color: inherit;
  font-family: var(--font-lato);
  outline: none;
  font-size: inherit;
  cursor: pointer;
  overflow: hidden;

  svg {
    width: var(--chevron-wt);
    height: var(--chevron-ht);
    position: absolute;
    top: 50%;
    right: var(--web-margin-s);
    transform: translateY(-50%);
  }
`;

const StyledDropdownOptions = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  top: var(--input-sz);
  left: 0;
  cursor: pointer;
  border: 1px solid var(--red);
  background-color: var(--white);
  z-index: 1;
  max-height: var(--dropdown-ht);
  overflow-y: auto;
`;

const StyledDropdownOption = styled.div`
  height: var(--option-sz);
  padding-right: var(--web-padding-s);
  padding-left: var(--web-padding-s);
  line-height: var(--option-sz);
  text-transform: uppercase;
  color: inherit;
  font-family: var(--font-lato);
  font-size: inherit;
  font-weight: var(--bold);
  letter-spacing: 0.1rem;

  &:hover {
    background-color: var(--red);
    color: var(--white);
  }
`;

export {
  StyledDropdown,
  StyledDropdownPanel,
  StyledDropdownOptions,
  StyledDropdownOption,
};
