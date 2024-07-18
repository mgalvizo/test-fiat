import Image from 'next/image';
import {
  StyledApp,
  StyledAppHero,
  StyledAppHeroContent,
  StyledAppHeroHeading2Text,
} from '@/_styled/Pages/AppPage';
import { StyledHeading } from '@/_styled/UI/Heading';
import car from '@/../public/car.png';

const Page = () => {
  return (
    <StyledApp>
      <StyledAppHero>
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
      <div>Form Section</div>
    </StyledApp>
  );
};

export default Page;
