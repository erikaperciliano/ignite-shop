import { getServerSideProps } from '@/lib/api';
import { globalStyles } from '@/styles/global';
import Home from './home' 

import 'keen-slider/keen-slider.min.css'

globalStyles();

export default  async function Page() {
  const products = await getServerSideProps()
  
  return (
    <Home products={products} />
  );
}
