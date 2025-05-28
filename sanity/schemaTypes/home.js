export default {
  name: "home",
  title: "Home",
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
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "problemHeadline",
      title: "Problem Headline",
      type: "string",
    },
    {
      name: "problemSubHeadline",
      title: "Problem Sub Headline",
      type: "string",
    },
    {
      name: "problemSlider",
      title: "Problem Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "problemTitle",
              title: "Problem Title",
              type: "string",
            },
            {
              name: "problemImage",
              title: "Problem Image",
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
      name: "revenueHeadline",
      title: "Revenue Engine Headline",
      type: "string",
    },
    {
      name: "revenueSubHeadline",
      title: "Revenue Engine Sub Headline",
      type: "string",
    },
    {
      name: "revenueEngineMethodology",
      title: "Revenue Engine Methodology",
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
              name: "subTitle",
              title: "Sub Title",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
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
      name: "revenueEngineProcess",
      title: "Revenue Engine Process",
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
              name: "subTitle",
              title: "Sub Title",
              type: "string",
            },
            {
              name: "keyDeliverable",
              title: "Key Deliverable",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
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
      name: "servicesHeadline",
      title: "Services Headline",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
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
      name: "resultHeadline",
      title: "Result Headline",
      type: "string",
    },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "resultNumber",
              title: "Result Number",
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
      name: "insightTitle",
      title: "Revenue Insight Title",
      type: "string",
    },
    {
      name: "insights",
      title: "Insights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "insightTitle",
              title: "Insight Title",
              type: "string",
            },
            {
              name: "insightImage",
              title: "Insight Image",
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
      name: "poweredByTitle",
      title: "Powered By Title",
      type: "string",
    },
    {
      name: "poweredBySubTitle",
      title: "Powered By Sub Title",
      type: "string",
    },
    {
      name: "poweredByImage",
      title: "Powered By Image",
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
      name: "poweredByBlockContent",
      title: "Powered By Block Content",
      type: "string",
    },
    {
      name: "whyChooseTitle",
      title: "Why Choose Us Title",
      type: "string",
    },
    {
      name: "whyChooseUs",
      title: "Why Choose Us",
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
              name: "icon",
              title: "Icon",
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
  ],
};
