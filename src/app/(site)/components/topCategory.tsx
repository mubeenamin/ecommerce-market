import Image from "next/image";
import { getCategory } from "../../../../sanity/sanityUtils";

export default async function TopCategory() {
  const data = await getCategory();
  
  return (
    <main>
      <div>Top Category</div>
      <div className="flex">
      {data.map((cData) => (
        <div key={cData._id}>
          <div className="flex">
            {cData.categoryName}
              
          </div>
          
          </div>
      ))}
      </div>
    </main>
  );
}
