
import { getProducts } from "../../../../../sanity/sanityUtils";


import ProductList from "../../components/view/productList";

export default async function Products() {
  const product = await getProducts();

  return (
    <ProductList data={product} />
  );
}
