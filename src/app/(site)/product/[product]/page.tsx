import Image from "next/image";
import { getProduct } from "../../../../../sanity/sanityUtils";
import { CloudCog } from "lucide-react";


type Prop = {
    params: { product: string };
};

export default async function Product({ params }: Prop) {
    const slug = params.product;
    const singleProduct = await getProduct(slug);
    console.log(singleProduct);
    return (
        <div className="grid grid-cols-4">
        
        </div>
    )
}