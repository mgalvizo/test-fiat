'use client';
import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
  ${({ as }) =>
    as === 'h1' &&
    css`
      color: var(--white);
      font-size: var(--heading-fsz-1);
      font-family: var(--font-lato);
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: var(--web-margin-m);

      // 768px
      @media only screen and (min-width: 48em) {
        margin-bottom: var(--web-margin-l);
      }
    `}

  ${({ as }) =>
    as === 'h2' &&
    css`
      color: var(--black);
      font-size: var(--heading-fsz-2-s);
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-align: center;
      font-weight: var(--x-bold);
      margin-bottom: var(--web-margin-m);

      // 768px
      @media only screen and (min-width: 48em) {
        font-size: var(--heading-fsz-2-m);
        letter-spacing: 0.2rem;
        margin-bottom: var(--web-margin-l);
      }
    `}

    ${({ as }) =>
    as === 'h3' &&
    css`
      color: var(--white);
      font-style: italic;
      font-size: var(--heading-fsz-3-s);
      text-align: center;
      font-weight: var(--x-bold);

      // 768px
      @media only screen and (min-width: 48em) {
        font-size: var(--heading-fsz-3-m);
      }

      // 1024px
      @media only screen and (min-width: 64em) {
        font-size: var(--heading-fsz-3-l);
      }
    `}

    ${({ as }) =>
    as === 'h4' &&
    css`
      color: var(--red);
      font-style: italic;
      font-size: var(--heading-fsz-4-s);
      text-align: center;
      font-weight: var(--x-bold);

      // 768px
      @media only screen and (min-width: 48em) {
        font-size: var(--heading-fsz-4-m);
      }

      // 1024px
      @media only screen and (min-width: 64em) {
        font-size: var(--heading-fsz-4-l);
      }
    `}

    ${({ as }) =>
    as === 'h5' &&
    css`
      color: var(--black);
      font-size: var(--heading-fsz-5);
      font-family: var(--font-lato);
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: var(--web-margin-xl2);
    `}
`;

export { StyledHeading };
