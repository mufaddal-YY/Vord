export default {
  name: "caseStudies",
  title: "Case Studies",
  type: "document",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
    },

    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },

    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },

    {
      name: "title",
      title: "Case Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "excerpt",
      title: "Short Description / Excerpt",
      type: "text",
      rows: 3,
    },

    {
      name: "intro",
      title: "Introduction",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "aboutCompany",
      title: "About Client",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "ourSolution",
      title: "Our Solution",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "result",
      title: "Result",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "clientReview",
      title: "Client Review",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
  ],
};
