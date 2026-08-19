import type { Meta, StoryObj } from "@storybook/react-vite";
import NavAnchor from "../components/NavAnchor";

const meta = {
  title: "Components/NavAnchor",
  component: NavAnchor,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NavAnchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    to: "/profile"
  }
};

export const Minimal: Story = {
  args: {
    to: "/profile",
    navStyle: "minimal"
  }
};
