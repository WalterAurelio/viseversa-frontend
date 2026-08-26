import type { Meta, StoryObj } from "@storybook/react-vite";
import Category from "../components/Category";

const meta = {
  title: "Components/Category",
  component: Category
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/category",
    children: "Category"
  }
};
