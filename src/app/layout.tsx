'use client';

import { globalStyles } from '@/styles/global';
import { Header, Container } from '@/styles/pages/app';
import logoImg from '../assets/logo.svg';
import Image from 'next/image.js';

globalStyles(); 
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
