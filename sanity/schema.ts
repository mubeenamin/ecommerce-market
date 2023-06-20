import { type SchemaTypeDefinition } from "sanity";
import products from "./schemas/products";
import category from "./schemas/category";
import images from "./schemas/images";
import heroSection from "./schemas/heroSection";
import banner from "./schemas/banner";
import currency from "./schemas/currency";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category, images, heroSection, banner, currency],
};
