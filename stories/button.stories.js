import { component } from "../components/button";

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
  component,
};

export const Default = {
  args: {
    prefix: "ilo",
    name: "Click this",
    label: "Click this",
    type: "primary",
    url: "https://www.ilo.org",
    iconPosition: "left",
    size: "large",
    icon: { prefix: "ilo", name: "add", size: 24, color: "black" },
  },
};
