export default {
  name: "linkedin",
  title: "Linkedin Marketing & Optimization",
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
      name: "whyLinkedin",
      title: "Why Linkedin Headline",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "serviceHeadline",
      title: "Service Headline",
      type: "string",
    },
    {
      name: "services",
      title: "Linkedin Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "serviceTitle",
              title: "Service Title",
              type: "string",
            },
            {
              name: "servicedescription",
              title: "Service Description",
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
        },
      ],
    },
    {
      name: "whyVord",
      title: "Why Vord",
      type: "string",
    },
    {
      name: "whyContent",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
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
