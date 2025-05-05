'use client';

import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { globalStyles } from '@/styles/global'
import Link from "next/link";
globalStyles();

interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: ProductType[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <Product className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt={product.name} />
            <footer>
              <strong>{product.name}</strong>
              <span>${product.price.toFixed(2)}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  )
}
