import Button from "../components/button/button.twig";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
  },
  // Just pass along the imported variable.
  component: Button,
};

// Set default variables in the story.
export const Default = {
  args: { prefix: "ilo", name: "Click me", label: "Click me" },
};
