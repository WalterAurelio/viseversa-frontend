import type { Meta, StoryObj } from "@storybook/react-vite";
import NavAnchor from "../components/NavAnchor";

const meta = {
  title: "Components/NavAnchor",
  component: NavAnchor,
  args: {
    to: "/profile",
    navStyle: "fill"
  },
  argTypes: {
    navStyle: {
      control: { type: "radio" },
      options: ["fill", "minimal"]
    },
    children: {
      control: { type: "text" }
    }
  }
} satisfies Meta<typeof NavAnchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
