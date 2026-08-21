import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "../components/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: "Label",
    id: "some-id"
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
