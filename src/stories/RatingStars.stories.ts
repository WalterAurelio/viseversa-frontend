import type { Meta, StoryObj } from "@storybook/react-vite";
import RatingStars from "../components/RatingStars";

const meta = {
  title: "Components/RatingStars",
  component: RatingStars,
  args: {
    stars: 1
  },
  argTypes: {
    stars: {
      control: { type: "number", min: 0, max: 5, step: 1 }
    }
  }
} satisfies Meta<typeof RatingStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
