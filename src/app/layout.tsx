'use client';

import { Header, Container } from '@/styles/pages/app';
import logoImg from '../assets/logo.svg';
import Image from 'next/image.js';

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
              <Image src={logoImg} alt="Logo"/>
            </Header>
            {children}
          </Container>
      </body>
    </html>
  );
}
