export const revalidate = 60 * 60 * 2; // every 2 hours
interface ProductPageProps {
    params: {
      id: string;
    };
}

export default async function Product({ params }: ProductPageProps) {

    return(
        <h1>Product { params.id }</h1>
    )
}