import type { Meta, StoryObj } from "@storybook/react-vite";
import Notifications from "../interfaces/Notifications";
import "react-time-ago/locale/es";

const meta = {
  title: "Interfaces/Notifications",
  component: Notifications,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
