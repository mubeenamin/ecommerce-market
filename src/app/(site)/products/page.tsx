import Image from "next/image";
import { getProducts } from "../../../../sanity/sanityUtils";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default async function Products() {
  const product = await getProducts();

  return (
    <main className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 ">

      {product.map((iProduct) => (
        <div key={iProduct._id} className="space-y-2 shadow-lg py-4">
          <Link href={`../product/${iProduct.slug}`}>
            <div className="flex justify-center mx-auto w-64 h-64">
              <Image
                src={iProduct.images[0]}
                height={250}
                width={250}
                alt={iProduct.name}
              />
            </div>
            <div className="text-center space-y-2">
              <div className="text-xl font-bold">{iProduct.name}</div>
              <div>
                {iProduct.currencySymbol}
                {iProduct.price}
              </div>
              <Button className="w-40 gap-2">
                <ShoppingCart /> Add to cart{" "}
              </Button>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
