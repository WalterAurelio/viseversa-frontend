import type { Meta, StoryObj } from "@storybook/react-vite";
import Filter from "../components/Filter";

const meta = {
  title: "Components/Filter",
  component: Filter
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {};
