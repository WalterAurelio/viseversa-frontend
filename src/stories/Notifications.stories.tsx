import type { Meta, StoryObj } from "@storybook/react-vite";
import Notifications from "../interfaces/Notifications";
import notifications from "../json/notifications.json";
import type { TNotification } from "../components/Notification";

const meta = {
  title: "Interfaces/Notifications",
  component: Notifications
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifications: notifications as TNotification[]
  }
};
