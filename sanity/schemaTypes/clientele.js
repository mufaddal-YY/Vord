export default {
  name: "clientele",
  title: "Clientele",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "alt",
      title: "Alt text",
      type: "string",
    },
  ],
};
