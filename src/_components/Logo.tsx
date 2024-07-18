import Image from 'next/image';
import { StyledLogo, StyledLogoContent } from '@/_styled/Logo.styled';
import logo from '@/../public/logo.png';
import Link from 'next/link';

const Logo = () => {
  return (
    <StyledLogo>
      <StyledLogoContent>
        <Link href="#">
          <Image src={logo} alt="Fiat Logo" />
        </Link>
      </StyledLogoContent>
    </StyledLogo>
  );
};

export default Logo;
