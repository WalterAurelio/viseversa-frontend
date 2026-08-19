import type { Meta, StoryObj } from "@storybook/react-vite";
import NavBar from "../interfaces/NavBar";
import "react-time-ago/locale/es";

const meta = {
  title: "Interfaces/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
