import Image from "next/image";
import { getLaptop } from "../../../../sanity/sanityUtils";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";



export default async function Laptop() {
    const laptop = await getLaptop()
    return (<main className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4 ">
        {laptop.map((iLaptop) => (
            <div key={iLaptop._id} className="space-y-2 shadow-lg py-4">
                <div className="flex justify-center mx-auto w-64 h-64">
                    <Image
                        src={iLaptop.images[0]}
                        height={250}
                        width={250}
                        alt={iLaptop.name}
                    />
                </div>
                <div className="text-center space-y-2">
                    <div className="text-xl font-bold">{iLaptop.name}</div>
                    <div>
                        {iLaptop.currencySymbol}
                        {iLaptop.price}
                    </div>
                    <Button className="w-40 gap-2">
                        <ShoppingCart /> Add to cart{" "}
                    </Button>
                </div>
            </div>
        ))}
    </main>)
}