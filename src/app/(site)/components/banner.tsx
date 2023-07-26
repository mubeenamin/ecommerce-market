
import { getBanners } from "../../../../sanity/sanityUtils";
import BannersView from "./view/banners";


export default async function Banner() {
  const data = await getBanners();

  return (
   <BannersView data={data}/>
  );
}
