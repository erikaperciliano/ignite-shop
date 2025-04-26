'use server';
import Stripe from "stripe";
import { stripe } from "./stripe";

export const getServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  console.log('Stripe products response:', response);

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price; 

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
    };
  });

  return products;
};
