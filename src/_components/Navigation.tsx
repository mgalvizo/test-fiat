'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  StyledNavigation,
  StyledNavigationContent,
  StyledNavigationList,
  StyledNavigationItem,
  StyledNavigationHamburguer,
  StyledNavigationHamburguerIcon,
  StyledNavigationHamburguerBar,
  StyledNavigationMobileList,
} from '@/_styled/Navigation.styled';
import { menuItems } from '@/_dev-data/menu-items';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleNavigationHandler() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  const renderedItems = menuItems.map(item => {
    const { id, text, href, className } = item;

    return (
      <StyledNavigationItem key={id} className={className}>
        <Link href={href}>{text}</Link>
      </StyledNavigationItem>
    );
  });

  return (
    <StyledNavigation>
      <StyledNavigationContent as="nav">
        <StyledNavigationList>{renderedItems}</StyledNavigationList>
        <StyledNavigationHamburguer>
          <StyledNavigationHamburguerIcon
            onClick={toggleNavigationHandler}
            className={`${isOpen ? 'open' : ''}`}
          >
            <StyledNavigationHamburguerBar />
            <StyledNavigationHamburguerBar />
            <StyledNavigationHamburguerBar />
          </StyledNavigationHamburguerIcon>
        </StyledNavigationHamburguer>
        {isOpen && (
          <StyledNavigationMobileList>
            {renderedItems}
          </StyledNavigationMobileList>
        )}
      </StyledNavigationContent>
    </StyledNavigation>
  );
};

export default Navigation;
