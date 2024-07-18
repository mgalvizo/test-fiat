"use client";
import styled from "styled-components";
import { StyledStripe, StyledStripeContent } from "@/_styled/UI/Stripe";

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
  padding-bottom: calc(var(--web-padding-xl2) * 3);

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: var(--menu-ht);
    background-color: var(--white);
    content: "";
  }
`;

const StyledRootLayoutHeader = styled(StyledStripe)`
  z-index: 99999999;
  position: relative;
`;

const StyledRootLayoutHeaderContent = styled(StyledStripeContent)`
  // 768px
  @media only screen and (min-width: 48em) {
    position: relative;
  }
`;

export {
  StyledRootLayout,
  StyledRootLayoutHeader,
  StyledRootLayoutHeaderContent,
};
