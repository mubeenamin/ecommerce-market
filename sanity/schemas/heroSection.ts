import { defineType, defineField } from "sanity";

export default defineType({
  title: "Hero Section",
  name: "heroSection",
  type: "document",
  fields: [
    {
      title: "Hero Section Text",
      name: "heroSectionText",
      type: "string",
    },
    {
      title: "Hero Section Images",
      name: "heroSectionImages",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
