import Image from "next/image";

import HeroSection from "./components/heroSection";
import HeroBottum from "./components/heroBottum";
import Banner from "./components/banner";
import TopCategory from "./components/topCategory";

export default function Home() {
  

  return (
    <main>
      <HeroSection/>
      <HeroBottum/>
      <Banner/>
      
    </main>
  );
}
