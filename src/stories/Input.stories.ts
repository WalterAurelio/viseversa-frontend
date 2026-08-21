import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../components/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text",
    type: "text"
  },
  argTypes: {
    placeholder: {
      control: { type: "text" }
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "search"]
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
