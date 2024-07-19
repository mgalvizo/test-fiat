'use client';
import styled from 'styled-components';
import { StyledStripe, StyledStripeContent } from '@/_styled/UI/Stripe.styled';

const StyledAppForm = styled(StyledStripe)`
  background-color: var(--white);
  padding-top: calc(var(--web-padding-xl) * 2);
  padding-bottom: calc(var(--web-padding-l) * 2);
  margin-top: calc((var(--web-margin-xl2) + var(--web-margin-xs)) * -1);

  // 768px
  @media only screen and (min-width: 48em) {
    background-color: transparent;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: calc(var(--web-margin-xl2) * -1);
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    margin-top: calc((var(--web-margin-xl2) * 3) * -1);
  }
`;

const StyledAppFormContent = styled(StyledStripeContent)`
  // 768px
  @media only screen and (min-width: 48em) {
    background-color: var(--white);
    padding-top: calc((var(--web-padding-xl) * 2) + var(--web-padding-s));
    padding-bottom: calc((var(--web-padding-xl2) * 2) + var(--web-padding-l));
    padding-right: calc(var(--web-padding-xl) * 2);
    padding-left: calc(var(--web-padding-xl) * 2);
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    padding-top: calc(var(--web-padding-xl2) * 4);
    padding-bottom: calc((var(--web-padding-xl2) * 2) + var(--web-padding-m));
    padding-right: calc(var(--web-padding-xl2) * 2);
    padding-left: calc(var(--web-padding-xl2) * 2);
  }
`;

const StyledAppFormTag = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  row-gap: var(--web-margin-xl2);
`;

const StyledAppFormFieldset = styled.fieldset``;

const StyledAppFormLegend = styled.legend`
  width: 100%;
  margin-bottom: var(--web-margin-s);
`;

const StyledAppFormControlsWrapper = styled.div`
  &.datos_personales {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: 1fr;
    grid-row-gap: var(--web-margin-xl);
  }

  &.datos_fiat {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    grid-row-gap: var(--web-margin-xl);
  }

  // 768px
  @media only screen and (min-width: 48em) {
    &.datos_personales {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(3, 1fr);
      column-gap: calc(var(--web-margin-xl) * 2);
      row-gap: calc(var(--web-margin-xl2) + var(--web-margin-s));
    }

    &.datos_fiat {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      column-gap: calc(var(--web-margin-xl) * 2);
      row-gap: calc(var(--web-margin-xl2) + var(--web-margin-s));
    }
  }

  // 1024px
  @media only screen and (min-width: 64em) {
    &.datos_personales {
      column-gap: calc(var(--web-margin-xl) + var(--web-margin-xl2));
    }

    &.datos_fiat {
      column-gap: calc(var(--web-margin-xl) + var(--web-margin-xl2));
    }
  }
`;

const StyledAppFormHeading4Text = styled.span`
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
      width: var(--h4-dec-line-wt-m);
      height: var(--h4-dec-line-ht-m);
      background-color: var(--red);
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
      width: var(--h4-dec-line-wt-l);
    }
  }
`;

export {
  StyledAppForm,
  StyledAppFormContent,
  StyledAppFormTag,
  StyledAppFormFieldset,
  StyledAppFormLegend,
  StyledAppFormControlsWrapper,
  StyledAppFormHeading4Text,
};
