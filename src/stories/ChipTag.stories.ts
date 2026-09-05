import type { Meta, StoryObj } from "@storybook/react-vite";
import ChipTag from "../components/ChipTag";

const meta = {
  title: "Components/ChipTag",
  component: ChipTag,
  argTypes: {
    chipStyle: {
      control: { type: "radio" },
      options: ["fill", "minimal"]
    }
  }
} satisfies Meta<typeof ChipTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Buenos Aires",
    chipStyle: "fill"
  }
};
