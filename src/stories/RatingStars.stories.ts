import type { Meta, StoryObj } from '@storybook/react-vite';
import RatingStars from '../components/RatingStars';

const meta = {
  title: 'Components/RatingStars',
  component: RatingStars,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RatingStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 4,
  },
};
