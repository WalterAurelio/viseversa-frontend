import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    color: "black",
    buttonStyle: "fill",
    hasIcon: true,
    disabled: false,
    children: "Button"
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["black", "red"]
    },
    buttonStyle: {
      control: "radio",
      options: ["fill", "minimal"]
    },
    hasIcon: {
      control: "radio",
      options: [true, false]
    },
    disabled: {
      control: "radio",
      options: [true, false]
    },
    children: {
      control: "text"
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
