import styled from 'styled-components';
import {
  StyledComponent,
  StyledComponentContent,
} from '@/_styled/UI/Component.styled';

const StyledNavigation = styled(StyledComponent)`
  // 768px
  @media only screen and (min-width: 48em) {
    padding-left: calc(var(--web-padding-xl) * 2);
  }
`;

const StyledNavigationContent = styled(StyledComponentContent)`
  flex-direction: row;
  width: 100%;
  height: var(--menu-ht);
  justify-content: space-between;
  align-items: center;
`;

const StyledNavigationList = styled.ul`
  flex: 1;
  list-style-type: none;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  // 768px
  @media only screen and (min-width: 48em) {
    display: flex;
    height: 100%;

    .tablet {
      display: none;
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    .tablet {
      display: flex;
    }

    .desktop {
      display: none;
    }
  }
`;

const StyledNavigationItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  a:visited,
  a:link {
    display: block;
    font-weight: var(--x-bold);
    color: var(--black);
    padding-right: var(--web-padding-m);
    padding-left: var(--web-padding-m);

    &:hover {
      text-decoration: none;
      background-color: var(--red);
      color: var(--white);
    }
  }

  // 768px
  @media only screen and (min-width: 48em) {
    display: flex;

    a:visited,
    a:link {
      display: flex;
      align-items: center;
      padding-right: calc(var(--web-padding-l) + 1px);
      padding-left: calc(var(--web-padding-l) + 1px);
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    a:visited,
    a:link {
      padding-right: var(--web-padding-xl);
      padding-left: var(--web-padding-xl);
    }
  }
`;

const StyledNavigationHamburguer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  height: var(--menu-ht);
  width: var(--hamburguer-wt);

  // 768px
  @media only screen and (min-width: 48em) {
    flex: none;
    justify-content: center;
  }
`;

const StyledNavigationHamburguerBar = styled.span`
  display: block;
  width: var(--hamburguer-bar-wt);
  height: var(--hamburguer-bar-ht);
  background-color: var(--red);
`;

const StyledNavigationHamburguerIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--hamburguer-bar-wt);
  height: var(--hamburguer-icon-ht);
  cursor: pointer;

  &.open {
    justify-content: center;

    ${StyledNavigationHamburguerBar} {
      position: absolute;
      top: 50%;
      left: 0;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        transform: rotate(135deg);
      }

      &:nth-child(3) {
        display: none;
      }
    }
  }
`;

const StyledNavigationMobileList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--white);
  padding-top: var(--web-padding-s);
  padding-bottom: var(--web-padding-s);

  ${StyledNavigationItem} {
    a:visited,
    a:link {
      padding-top: var(--web-padding-s);
      padding-bottom: var(--web-padding-s);
    }

    text-align: right;
  }

  // 768px
  @media only screen and (min-width: 48em) {
    ${StyledNavigationItem} {
      display: none;
    }

    .tablet {
      display: block;
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    .tablet {
      display: none;
    }

    .desktop {
      display: block;
    }
  }
`;

export {
  StyledNavigation,
  StyledNavigationContent,
  StyledNavigationList,
  StyledNavigationItem,
  StyledNavigationHamburguer,
  StyledNavigationHamburguerIcon,
  StyledNavigationHamburguerBar,
  StyledNavigationMobileList,
};
