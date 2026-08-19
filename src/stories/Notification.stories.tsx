import type { Meta, StoryObj } from "@storybook/react-vite";
import Notification, { type TNotification } from "../components/Notification";
import notificationsJson from "../json/notifications.json";
import "react-time-ago/locale/es";

const notifications = notificationsJson as TNotification[];

const meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Request: Story = {
  args: {
    notification: notifications.find((notification) => notification.variant === "request")!
  }
};

export const Comment: Story = {
  args: {
    notification: notifications.find((notification) => notification.variant === "comment")!
  }
};

export const Accepted: Story = {
  args: {
    notification: notifications.find((notification) => notification.variant === "accepted")!
  }
};

export const Review: Story = {
  args: {
    notification: notifications.find((notification) => notification.variant === "review")!
  }
};
