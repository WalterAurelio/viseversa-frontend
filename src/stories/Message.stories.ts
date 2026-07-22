import type { Meta, StoryObj } from '@storybook/react-vite';
import Message from '../components/Message';

const meta = {
  title: 'Components/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Self: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet',
    owner: 'self',
    time: '10:00',
  },
};

export const Other: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet',
    owner: 'other',
    time: '10:15',
  },
};
