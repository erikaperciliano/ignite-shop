'use client';


import { globalStyles } from '@/styles/global';
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import shirt1 from '../assets/shirts/Shirt1.png'
import shirt2 from '../assets/shirts/Shirt2.png'

globalStyles();

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 70.00</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 60.00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
