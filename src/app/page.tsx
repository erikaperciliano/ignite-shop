'use client';


import { globalStyles } from '@/styles/global';
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'


import shirt1 from '../assets/shirts/Shirt1.png'
import shirt2 from '../assets/shirts/Shirt2.png'
import shirt3 from '../assets/shirts/Shirt3.png'

import 'keen-slider/keen-slider.min.css'

globalStyles();

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={shirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 70.00</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt2} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 60.00</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt3} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 62.00</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt3} width={520} height={480} alt=""/>

        <footer>
          <strong>Shirt X</strong>
          <span>$ 62.00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
