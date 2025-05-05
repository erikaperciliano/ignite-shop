
'use client';

import { ImageContainer, ProductContainer, ProductDetails } from "../../../styles/pages/product"

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>T-Shirt X</h1>
        <span>$ 79,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquid rerum exercitationem facere a molestiae ut sed velit non mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed laboriosam tempora?</p>

        <button>
         Buy Now
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}