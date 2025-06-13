export default {
  name: "contentStrategy",
  title: "Content Strategy and Creation",
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
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "whyImage",
      title: "Why Content Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "effectiveStrategyHeader",
      title: "Effective Strategy Header",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "effectiveStrategy",
      title: "Effective Strategy Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
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
          ],
        },
      ],
    },
    {
      name: "contentConverts",
      title: "How Vord Builds Content",
      type: "string",
    },
    {
      name: "contentConvertsImage",
      title: "Content Converts Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "contentDescription",
      title: "Content Description",
      type: "string",
    },
    {
      name: "strategyProcess",
      title: "Strategy Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
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
          ],
        },
      ],
    },
    {
      name: "contentTypes",
      title: "Content Types",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "contentTypeImage",
      title: "Content Type Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "whyVord",
      title: "Why Vord",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    },
    {
      name: "ctaDescription",
      title: "CTA Description",
      type: "string",
    },
    {
      name: "ctaPrimaryButton",
      title: "CTA Primary Button",
      type: "string",
    },
    {
      name: "ctalink",
      title: "CTA Button Link",
      type: "string",
    },
    {
      name: "ctaSecondaryButton",
      title: "CTA Secondary Button",
      type: "string",
    },
    {
      name: "ctaSecondarylink",
      title: "CTA Button Link",
      type: "string",
    },
  ],
};
