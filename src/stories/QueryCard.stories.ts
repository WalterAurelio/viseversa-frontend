import type { Meta, StoryObj } from '@storybook/react-vite';
import QueryCard from '../components/QueryCard';

const meta = {
  title: 'Components/QueryCard',
  component: QueryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof QueryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
};