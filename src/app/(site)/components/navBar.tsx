

import { getCategory } from "../../../../sanity/sanityUtils";
import Header from "./view/header";

export default async function NavBar() {
  
 
  const data = await getCategory();
    return (
      <Header navBarItem={data}/>
      
    );
  }
