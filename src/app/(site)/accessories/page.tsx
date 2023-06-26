import Image from "next/image";
import { getAccessories } from "../../../../sanity/sanityUtils";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";




export default async function Accessories() {
    const accessories = await getAccessories()
    return (<main className="grid grid-cols-[auto] md:grid md:grid-cols-[repeat(3,auto)] lg:grid lg:grid-cols-[repeat(4,auto)] gap-10  ">
        {accessories.map((iAccessories) => (
            <div key={iAccessories._id} className="space-y-2 shadow-lg py-4">
                <div className="flex justify-center mx-auto w-64 h-64">
                    <Image
                        src={iAccessories.images[0]}
                        height={250}
                        width={250}
                        alt={iAccessories.name}
                    />
                </div>
                <div className="text-center space-y-2">
                    <div className="text-xl font-bold">{iAccessories.name}</div>
                    <div>
                        {iAccessories.currencySymbol}
                        {iAccessories.price}
                    </div>
                    <Button className="w-40 gap-2">
                        <ShoppingCart /> Add to cart{" "}
                    </Button>
                </div>
            </div>
        ))}
    </main>)
}