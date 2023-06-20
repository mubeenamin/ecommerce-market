import { getMobile } from "../../../../sanity/sanityUtils"

export default async function Mobile(){
    const mobile = await getMobile();
    console.log(mobile);
    return(
        <main></main>
    )
}