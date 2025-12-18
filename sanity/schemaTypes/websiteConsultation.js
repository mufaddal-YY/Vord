export default {
  name: "websiteConsultation",
  title: "Website Consultation",
  type: "document",
  fields: [
    // Meta Fields
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

    // Page Banner
    {
      name: "headline",
      title: "Page Headline",
      type: "string",
      description: "Main headline shown in the page banner",
    },

    // Intro Section
    {
      name: "introHeadline",
      title: "Intro Section Headline",
      type: "string",
    },
    {
      name: "introDescription",
      title: "Intro Section Description",
      type: "text",
    },
    {
      name: "introButtonText",
      title: "Intro Button Text",
      type: "string",
      description: "Text for the CTA button (e.g., 'Book Your Clarity Call')",
    },
    {
      name: "introImage",
      title: "Intro Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Why Not Converting Section
    {
      name: "whyNotConvertingHeadline",
      title: "Why Not Converting Headline",
      type: "string",
    },
    {
      name: "whyNotConvertingDescription",
      title: "Why Not Converting Description",
      type: "text",
    },
    {
      name: "whyNotConvertingImage",
      title: "Why Not Converting Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Consultation Process Section
    {
      name: "processHeadline",
      title: "Process Section Headline",
      type: "string",
    },
    {
      name: "processDescription",
      title: "Process Description (Above Steps)",
      type: "text",
      description: "Text displayed above the process steps",
    },
    {
      name: "processSteps",
      title: "Consultation Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Step Title",
              type: "string",
            },
            {
              name: "description",
              title: "Step Description",
              type: "text",
            },
            {
              name: "image",
              title: "Step Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "processDeliverable",
      title: "Process Deliverable (Below Steps)",
      type: "text",
      description: "Deliverable info displayed below the process steps (e.g., 'You receive an actionable PDF/Notion deliverable with timelines for implementation')",
    },

    // VORD Framework Section
    {
      name: "frameworkHeadline",
      title: "Framework Section Headline",
      type: "string",
    },
    
    {
      name: "frameworkSteps",
      title: "Framework Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "step",
              title: "Step Number",
              type: "string",
              description: "e.g., 01, 02, 03, 04",
            },
            {
              name: "title",
              title: "Step Title",
              type: "string",
            },
            {
              name: "description",
              title: "Step Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "frameworkDescription",
      title: "Framework Section Description",
      type: "text",
    },

    // Who Is This For Section
    {
      name: "whoIsThisForHeadline",
      title: "Who Is This For Headline",
      type: "string",
    },
    {
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Audience Title",
              type: "string",
            },
            {
              name: "description",
              title: "Audience Description",
              type: "text",
            },
            {
              name: "image",
              title: "Audience Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "whoIsThisForImage",
      title: "Who Is This For Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // Proven Results Section
    {
      name: "resultsHeadline",
      title: "Results Section Headline",
      type: "string",
    },
    {
      name: "resultsDescription",
      title: "Results Section Description",
      type: "text",
    },
    {
      name: "results",
      title: "Proven Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stat",
              title: "Statistic",
              type: "string",
              description: "e.g., 35%, 28%, 2x",
            },
            {
              name: "label",
              title: "Result Label",
              type: "string",
            },
            {
              name: "description",
              title: "Result Description",
              type: "text",
            },
          ],
        },
      ],
    },

    // What You Get Section
    {
      name: "whatYouGetHeadline",
      title: "What You Get Headline",
      type: "string",
    },
    {
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Deliverable Title",
              type: "string",
            },
            {
              name: "description",
              title: "Deliverable Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "whatYouGetImage",
      title: "What You Get Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    // FAQ Section
    {
      name: "faqHeadline",
      title: "FAQ Section Headline",
      type: "string",
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },

    // CTA Section
    {
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    },
    {
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
    },
    {
      name: "ctaPrimaryButton",
      title: "CTA Primary Button Text",
      type: "string",
    },
    {
      name: "ctalink",
      title: "CTA Primary Button Link",
      type: "string",
    },
    {
      name: "ctaSecondaryButton",
      title: "CTA Secondary Button Text",
      type: "string",
    },
    {
      name: "ctaSecondarylink",
      title: "CTA Secondary Button Link",
      type: "string",
    },
  ],
};

