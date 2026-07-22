import type { Meta, StoryObj } from '@storybook/react-vite';
import MessagePreview from '../components/MessagePreview';

const meta = {
  title: 'Components/MessagePreview',
  component: MessagePreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};