import { defineType, defineField } from "sanity";

export default defineType({
  title: "Products",
  name: "products",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Categorey",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      title: "Images",
      name: "images",
      type: "reference",
      to: [{ type: "images" }],
    },
    {
      title: "Currency",
      name: "currency",
      type: "reference",
      to: [{ type: "currency" }],
    },
    {
      title: "Price",
      name: "price",
      type: "number",
      
    },
  ],
  
});
