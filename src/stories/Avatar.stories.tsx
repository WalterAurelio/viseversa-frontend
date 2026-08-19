import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "../components/Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {};

export const Medium: Story = {
  args: {
    size: "M"
  }
};

export const Large: Story = {
  args: {
    size: "L"
  }
};

export const ExtraLarge: Story = {
  args: {
    size: "XL"
  }
};
