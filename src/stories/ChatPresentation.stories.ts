import type { Meta, StoryObj } from '@storybook/react-vite';
import ChatPresentation from '../components/ChatPresentation';

const meta = {
  title: 'Components/ChatPresentation',
  component: ChatPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChatPresentation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};