import Image from "next/image";
import { getBanners } from "../../../../sanity/sanityUtils";


export default async function Banner() {
  const data = await getBanners();

  return (
    <main>
      {data.map((iData) => (
        <div key={iData._id} className="space-y-6 md:flex md:flex-row md:gap-x-6 md:space-y-0 md:py-6 cursor-pointer">
          {iData.bannerImages.map((ibanner) => (
            <div key={ibanner} >
              <Image src={ibanner} width={650} height={650} alt="banners" className="transition duration-700 ease-in-out hover:translate-y-4 hover:scale-105"/>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}