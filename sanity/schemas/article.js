export default {
  name: "article",
  title: "Actualité",
  type: "document",
  fields: [
    { name: "title", title: "Titre", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "tag",
      title: "Catégorie",
      type: "string",
      options: { list: ["Conférence", "Formation", "Communauté"] }
    },
    { name: "date", title: "Date", type: "date" },
    { name: "excerpt", title: "Résumé court", type: "text", rows: 3 },
    { name: "body", title: "Contenu", type: "array", of: [{ type: "block" }] },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } }
  ]
};
