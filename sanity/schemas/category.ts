import { defineType, defineField } from "sanity";

export default defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "categoryName",
      type: "string",
    },

    {
      title: "Link",
      name: "link",
      type: "string",
    },
  ],
});
