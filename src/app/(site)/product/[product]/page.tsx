
import Image from "next/image";
import { getProduct } from "../../../../../sanity/sanityUtils"


import { Button } from "../../components/ui/button";
import { ShoppingCart } from "lucide-react";



type Prop = {
    params: { product: string };
};

export default async function Product({ params }: Prop) {
    
    const slug = params.product;
    const singleProduct = await getProduct(slug);

    return (
        <div>
            <div>
                <div >
                    <Image src={singleProduct.images[0]} width={500} height={500} alt={singleProduct.name} />
                </div>
                <div className="flex justify-center mx-auto">
                    <Button className="w-40 gap-2" >
                        <ShoppingCart /> Add to cart{" "}
                    </Button>
                </div>
            </div>
        </div>
    )
}