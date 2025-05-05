export const dynamic = 'force-static'; //This tells Next.js: “Render this page statically at build time. If anything dynamic is used, throw an error.”

import { getProducts } from '@/lib/api';
import { globalStyles } from '@/styles/global';
import Home from './home' 

import 'keen-slider/keen-slider.min.css'

globalStyles();

export default  async function Page() {
  const products = await getProducts()
  
  return (
    <Home products={products} />
  );
}
