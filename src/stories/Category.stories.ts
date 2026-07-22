import type { Meta, StoryObj } from '@storybook/react-vite';
import Category from '../components/Category';

const meta = {
  title: 'Components/Category',
  component: Category,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
  args: {
    name: 'Category Name',
  },
};