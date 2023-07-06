import { getMobile } from "../../../../sanity/sanityUtils"

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../components/ui/button";

export default async function Mobile() {
    const mobile = await getMobile();

    return (
        <main className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 ">
            {mobile.map((iMobile) => (
                <div key={iMobile._id} className="space-y-2 shadow-lg py-4">
                    <div className="flex justify-center mx-auto w-64 h-64">
                        <Image
                            src={iMobile.images[0]}
                            height={250}
                            width={250}
                            alt={iMobile.name}
                        />
                    </div>
                    <div className="text-center space-y-2">
                        <div className="text-xl font-bold">{iMobile.name}</div>
                        <div>
                            {iMobile.currencySymbol}
                            {iMobile.price}
                        </div>
                        <Button className="w-40 gap-2">
                            <ShoppingCart /> Add to cart{" "}
                        </Button>
                    </div>
                </div>
            ))}
        </main>
    )
}