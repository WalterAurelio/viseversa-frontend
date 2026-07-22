import type { Meta, StoryObj } from '@storybook/react-vite';
import PostCard from '../components/PostCard';

const meta = {
  title: 'Components/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};