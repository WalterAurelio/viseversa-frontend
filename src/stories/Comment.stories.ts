import type { Meta, StoryObj } from '@storybook/react-vite';
import Comment from '../components/Comment';

const meta = {
  title: 'Components/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
