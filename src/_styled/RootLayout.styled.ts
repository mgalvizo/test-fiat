"use client";
import styled from "styled-components";
import { StyledStripe, StyledStripeContent } from "./UI/Stripe";

const StyledRootLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: hidden;
  background: var(--gradient);
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: var(--menu-height);
    background-color: var(--white);
    content: "";
  }
`;

const StyledRootLayoutStripe = styled(StyledStripe)`
  z-index: 99999999;
`;

const StyledRootLayoutStripeContent = styled(StyledStripeContent)``;

export {
  StyledRootLayout,
  StyledRootLayoutStripe,
  StyledRootLayoutStripeContent,
};
