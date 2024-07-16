import styled from "styled-components";

const StyledStripe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledStripeContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-basis: var(--max-design-width);
`;

export { StyledStripe, StyledStripeContent };
