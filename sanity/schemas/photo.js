export default {
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    { name: "caption", title: "Légende", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }
  ]
};
