
import { getCategories } from "../../../../../sanity/sanityUtils";
import ProductList from "../../components/productList";






type Prop1 = {
    params: { category: string };
};

export default async function ProductCategory({ params }: Prop1) {

    const category = params.category;
    const singleCategory = await getCategories(category);
    return (
        <ProductList data={singleCategory} />
    )
}