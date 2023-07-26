
import { Award, ShipIcon, Trophy, Truck } from "lucide-react";
import { Separator } from "./ui/separator";

export default function HeroBottum() {
  
  return (
    <main >
      <div className="flex flex-col mx-auto space-y-4 md:space-y-0 md:flex md:flex-row md:justify-between p-8">
        <div className="flex gap-x-6 font-bold">
          <div><Truck /></div>
          <div>Free Shipping & Retrun</div>
        </div>
        <div className="hidden md:block">
          <Separator className="stroke-black" orientation="vertical" />
        </div>
        <div className="flex gap-x-6 font-bold">
          <div><Award /></div>
          <div>Lowest Price Quarantee</div>
        </div>
        <div className="hidden md:block">
          <Separator orientation="vertical" />
        </div>
        <div className="flex gap-x-6 font-bold">
          <div><Trophy /></div>
          <div>Longest Warranty Offer</div>
        </div>
      </div>
    </main>
  );
}
