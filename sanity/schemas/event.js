export default {
  name: "event",
  title: "Événement",
  type: "document",
  fields: [
    { name: "title", title: "Titre", type: "string", validation: (Rule) => Rule.required() },
    { name: "date", title: "Date", type: "datetime" },
    { name: "location", title: "Lieu", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 4 }
  ]
};
