export default {
  name: "article",
  title: "Actualité",
  type: "document",
  fields: [
    { name: "title", title: "Titre", type: "string", validation: (Rule) => Rule.required() },
    {
      name: "slug",
      title: "Adresse de la page (slug)",
      description: "Partie de l'adresse web de l'article, ex. premiere-conference. Cliquez sur « Generate » pour la créer à partir du titre.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    },
    {
      name: "tag",
      title: "Catégorie",
      type: "string",
      options: { list: ["Conférence", "Formation", "Communauté"] }
    },
    { name: "date", title: "Date", type: "date" },
    { name: "excerpt", title: "Résumé court", type: "text", rows: 3, description: "Affiché sur les cartes et dans les aperçus de partage." },
    { name: "image", title: "Image principale", type: "image", options: { hotspot: true } },
    {
      name: "body",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Paragraphe", value: "normal" },
            { title: "Intertitre", value: "h2" },
            { title: "Sous-intertitre", value: "h3" },
            { title: "Citation", value: "blockquote" }
          ]
        }
      ]
    },
    {
      name: "gallery",
      title: "Galerie photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "caption", title: "Légende", type: "string" }]
        }
      ],
      options: { layout: "grid" }
    }
  ],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" }
  }
};
