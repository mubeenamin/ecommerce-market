"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "../ui/button";
import { getHeroSection } from "../../../../sanity/sanityUtils";

export default async function HeroSection() {
  const hero = await getHeroSection();

  return (
    <main>
      {hero.map((hItem) => (
        <div key={hItem._id}>
          <div className="bg-gradient-to-t from-purple-400 to-purple-700 rounded-b-lg">
            <div className=" py-8 md:flex md:flex-row  md:w-full flex flex-col-reverse mx-auto  md:py-28 ">
              <div
                className="md:ml-8 md:basis-1/2  py-8 mt-6 md:py-28 text-center  space-y-4 md:space-y-0 md:flex md:flex-col md:gap-y-8 "
              >
                <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white">
            
                  <PortableText value={hItem.content} />
                </div>
                <div>
                  <Button className="bg-transparent w-32 text-sm rounded-full  border-2 hover:bg-purple-400 hover:text-white md:font-bold transition duration-700 ease-in-out hover:translate-y-1 hover:scale-110">
                    Shop Now
                  </Button>
                </div>
              </div>

              <div className="  md:flex flex mx-auto ">
                <div className="relative bg-slate-50 blur-2xl w-32 h-32 md:w-96 md:h-96 rounded-full"></div>
                <Image
                  src={hItem.heroSectionImages[0]}
                  width={400}
                  height={400}
                  alt="hero"
                  className="hidden md:object-contain md:block absolute"
                />

                <Image
                  src={hItem.heroSectionImages[0]}
                  width={150}
                  height={150}
                  alt="hero"
                  className="object-contain md:hidden absolute"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
