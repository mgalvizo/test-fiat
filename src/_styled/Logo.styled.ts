'use client';
import styled from 'styled-components';
import {
  StyledComponent,
  StyledComponentContent,
} from '@/_styled/UI/Component.styled';

const StyledLogo = styled(StyledComponent)`
  position: absolute;
  top: calc((var(--web-margin-xs) + var(--web-margin-s)) * -1);
  left: calc(var(--web-margin-s) * -1);
  width: auto;

  // 768px
  @media only screen and (min-width: 48em) {
    left: calc(var(--web-margin-l) * -1);
  }
`;

const StyledLogoContent = styled(StyledComponentContent)``;

export { StyledLogo, StyledLogoContent };
