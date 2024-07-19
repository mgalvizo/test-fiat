'use client';
import styled from 'styled-components';
import { StyledStripe, StyledStripeContent } from '@/_styled/UI/Stripe.styled';

const StyledAppHero = styled(StyledStripe)`
  padding-top: var(--web-padding-l);

  // 768px
  @media only screen and (min-width: 48em) {
    position: relative;
    z-index: 1;
    padding-top: var(--web-padding-xl);
  }
`;

const StyledAppHeroContent = styled(StyledStripeContent)`
  img {
    width: fit-content;
    margin-top: var(--web-margin-xs);
    margin-right: auto;
    margin-left: auto;
    height: auto;
    max-width: var(--car-i-wt-s);
  }

  // 768px
  @media only screen and (min-width: 48em) {
    img {
      margin-top: calc((var(--web-margin-xs) + var(--web-margin-s)) * -1);
      max-width: var(--car-i-wt-m);
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    img {
      margin-top: calc((var(--web-margin-xs) + var(--web-margin-m)) * -1);
      max-width: var(--car-i-wt-l);
      transform: translateX(calc(var(--web-margin-m) * -1));
    }
  }
`;

const StyledAppHeroHeading2Text = styled.span`
  // 768px
  @media only screen and (min-width: 48em) {
    display: inline-block;
    position: relative;
    padding-right: var(--web-padding-l);
    padding-left: var(--web-padding-l);

    &:before,
    &:after {
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: var(--h2-dec-line-wt-m);
      height: var(--h2-dec-line-ht-m);
      background-color: var(--black);
      content: '';
    }

    &:before {
      left: 100%;
    }

    &:after {
      left: auto;
      right: 100%;
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    padding-right: var(--web-padding-m);
    padding-left: var(--web-padding-m);

    &:before,
    &:after {
      width: var(--h2-dec-line-wt-l);
    }
  }
`;

export { StyledAppHero, StyledAppHeroContent, StyledAppHeroHeading2Text };
