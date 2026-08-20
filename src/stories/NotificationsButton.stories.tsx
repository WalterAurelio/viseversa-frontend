import type { Meta, StoryObj } from "@storybook/react-vite";
import NotificationsButton from "../components/NotificationsButton";

const meta = {
  title: "Components/NotificationsButton",
  component: NotificationsButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NotificationsButton>;

export default meta;

type Story = StoryObj<typeof NotificationsButton>;

export const Primary: Story = {
  args: {
    onClick: () => {}
  }
};
