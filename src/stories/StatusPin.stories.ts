import type { Meta, StoryObj } from "@storybook/react-vite";
import StatusPin from "../components/StatusPin";

const meta = {
  title: "Components/StatusPin",
  component: StatusPin,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof StatusPin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
