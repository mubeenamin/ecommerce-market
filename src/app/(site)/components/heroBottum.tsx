
import { Award, ShipIcon, Trophy, Truck } from "lucide-react";

export default function HeroBottum() {
  const items = [
    { name: "Free Shipping & Retrun", icon: <Truck /> },
    { name: "Lowest Price Quarantee", icon: <Award /> },
    { name: "Longest Warranty Offer", icon: <Trophy /> },
  ];
  return (
    <main className="">
      <div className="md:flex md:justify-between p-8">{
        items.map((iItem)=>(
            <div key={iItem.name} className="flex gap-x-6 font-bold">
                <div>{iItem.icon}</div>
                <div>{iItem.name}</div>
            </div>
        ))
        }</div>
    </main>
  );
}
