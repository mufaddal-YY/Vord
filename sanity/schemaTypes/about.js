export default {
  name: "about",
  title: "About",
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
      name: "missionHeadline",
      title: "Mission Headline",
      type: "string",
    },
    {
      name: "missionStatement",
      title: "Mission Statement",
      type: "string",
    },
    {
      name: "missionImage",
      title: "Mission Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "visionHeadline",
      title: "Vision Headline",
      type: "string",
    },
    {
      name: "visionStatement",
      title: "Vision Statement",
      type: "string",
    },
    {
      name: "visionImage",
      title: "Vision Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "team",
      title: "Team",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "memberName",
              title: "Member Name",
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
    
  ],
};
