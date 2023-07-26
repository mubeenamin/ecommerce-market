

import HeroSectionView from "./(view)/heroSection";

import { getHeroSection } from "../../../../sanity/sanityUtils";


export default async function HeroSection() {
  const hero = await getHeroSection();

  return (
    <HeroSectionView data={hero}/>
  )
}
