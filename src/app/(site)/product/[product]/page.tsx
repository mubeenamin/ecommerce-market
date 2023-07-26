

import { getProduct } from "../../../../../sanity/sanityUtils"
import Single from "../../components/single";



type Prop = {
    params: { product: string };
};

export default async function Product({ params }: Prop) {

    const slug = params.product;
    const singleItem = await getProduct(slug);
    return (
        <>
            <Single data={singleItem} />
        </>)
}