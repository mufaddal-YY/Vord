export default {
  name: "emailMarketing",
  title: "B2B Email Marketing",
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
      name: "headImage",
      title: "Header Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "whyEmail",
      title: "Why Email",
      type: "string",
    },
    {
      name: "whyEmailImage",
      title: "Why Email Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "emailDescription",
      title: "Email Description",
      type: "string",
    },
    {
      name: "approach",
      title: "Our Approach",
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
      name: "campaignImage",
      title: "Campaign Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "campaignTypes",
      title: "Campaign Types Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
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
