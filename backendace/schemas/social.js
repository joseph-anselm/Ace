export default {
  type: "document",
  name: "social",
  fieldsets: [{ name: "social", title: "Social media handles" }],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Twitter",
      name: "twitter",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "string",
      fieldset: "social",
    },
    {
      title: "Facebook",
      name: "facebook",
      type: "string",
      fieldset: "social",
    },
  ],
};
