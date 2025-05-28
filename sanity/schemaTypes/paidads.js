export default {
  name: "paidads",
  title: "Paid Ads",
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
      name: "whyPaidAds",
      title: "Why Paid Ads Matters",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "adsManagement",
      title: "Ads Management",
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
              name: "processHeadline",
              title: "Process Headline",
              type: "string",
            },
            {
              name: "process",
              title: "Process",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
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
                  ],
                },
              ],
            },
            {
              name: "capabilities",
              title: "Capabilities",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
          ],
        },
      ],
    },
    
    {
      name: "advantage",
      title: "Advantage",
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
