import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import StyledComponentsRegistry from '@/_lib/registry';
import {
  StyledRootLayout,
  StyledRootLayoutHeader,
  StyledRootLayoutHeaderContent,
} from '@/_styled/RootLayout.styled';
import Logo from '@/_components/Logo';
import Navigation from '@/_components/Navigation';
import GlobalStyle from '@/_styled/global-style';

const lato = Lato({
  subsets: ['latin-ext'],
  weight: ['400', '700', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-lato',
});

const playfair_display = Playfair_Display({
  subsets: ['latin-ext'],
  weight: ['400', '700', '900'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-playfair_display',
});

const metadata: Metadata = {
  title: 'Fiat Test',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair_display.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <StyledRootLayout>
            {/* Begins header stripe */}
            <StyledRootLayoutHeader>
              <StyledRootLayoutHeaderContent>
                <Logo />
                <Navigation />
              </StyledRootLayoutHeaderContent>
            </StyledRootLayoutHeader>
            {/* Ends header stripe */}
            {children}
          </StyledRootLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export { metadata };

export default RootLayout;
