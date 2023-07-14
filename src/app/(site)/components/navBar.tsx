

import { getCategory } from "../../../../sanity/sanityUtils";
import Header from "./header";

export default async function NavBar() {
  
 
  const data = await getCategory();
    return (
      <Header navBarItem={data}/>
      
    );
  }
