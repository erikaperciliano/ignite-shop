'use client';

import { Header, Container } from '@/styles/pages/app';
import logoImg from '../assets/logo.svg';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Container>
            <Header>
              <img src={logoImg.src} alt="Logo" />
            </Header>
            {children}
          </Container>
      </body>
    </html>
  );
}
