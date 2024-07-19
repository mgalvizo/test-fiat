'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  StyledDropdown,
  StyledDropdownPanel,
  StyledDropdownOptions,
  StyledDropdownOption,
} from '@/_styled/Form/Dropdown.styled';
import { SelectOption } from '@/_dev-data/select-options';
import chevron from '@/../public/chevron-down.svg';

interface DropdownProps {
  id: string;
  options: SelectOption[];
}

const Dropdown = ({ id, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropdownSelection, setdropdownSelection] =
    useState<null | SelectOption>(null);
  const divElement = useRef<HTMLDivElement>(null);

  const handleSelection = (option: SelectOption) => {
    setdropdownSelection(option);
  };

  // To close the dropdown
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (!divElement.current) {
        return;
      }

      if (!divElement.current.contains(e.target as HTMLDivElement)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    setIsOpen(false);
    // Get the option and pass it to the parent
    handleSelection(option);
  };

  const renderedOptions = options.map(option => {
    return (
      // Attach an onClick handler to each option and call the event handler passing the current option
      <StyledDropdownOption
        key={option.id}
        onClick={() => handleOptionClick(option)}
      >
        {option.text}
      </StyledDropdownOption>
    );
  });

  // Assign the ref to the root element returned as JSX
  return (
    <StyledDropdown ref={divElement} id={id}>
      <StyledDropdownPanel onClick={handleClick}>
        {dropdownSelection?.text || 'Selecciona'}
        <Image src={chevron} alt="chevron" />
      </StyledDropdownPanel>
      {isOpen && (
        <StyledDropdownOptions>{renderedOptions}</StyledDropdownOptions>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
