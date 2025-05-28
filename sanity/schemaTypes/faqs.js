export default {
  name: "faqs",
  title: "Faqs",
  type: "document",
  fields: [
    {
      name: "faqQuestion",
      title: "FAQ Question",
      type: "string",
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
