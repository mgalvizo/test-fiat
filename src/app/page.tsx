import { useState } from 'react';
import Image from 'next/image';
import { StyledApp } from '@/_styled/Pages/App/Page.styled';
import {
  StyledAppHero,
  StyledAppHeroContent,
  StyledAppHeroHeading2Text,
} from '@/_styled/Pages/App/Hero.styled';
import {
  StyledAppForm,
  StyledAppFormContent,
} from '@/_styled/Pages/App/Form.styled';
import Form from '@/_components/Form/Form';
import { StyledHeading } from '@/_styled/UI/Heading.styled';
import car from '@/../public/car.png';

const Page = () => {
  return (
    <StyledApp>
      <StyledAppHero as="section">
        <StyledAppHeroContent>
          <StyledHeading as="h1">Cotizador</StyledHeading>
          <StyledHeading as="h2">
            <StyledAppHeroHeading2Text>
              Citadino, Aventurero, Deportivo
            </StyledAppHeroHeading2Text>
          </StyledHeading>
          <StyledHeading as="h3">Elige el tuyo</StyledHeading>
          <Image src={car} alt="Fiat image" />
        </StyledAppHeroContent>
      </StyledAppHero>
      <StyledAppForm as="section">
        <StyledAppFormContent>
          <Form />
        </StyledAppFormContent>
      </StyledAppForm>
    </StyledApp>
  );
};

export default Page;
