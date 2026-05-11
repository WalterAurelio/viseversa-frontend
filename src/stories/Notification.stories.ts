import type { Meta, StoryObj } from '@storybook/react-vite';
import Notification from '../components/Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Comment: Story = {};

export const Publication: Story = {
  args: {
    type: 'solicitudIntercambio',
  },
};

export const SuccessfulExchange: Story = {
  args: {
    type: 'intercambioCompleto',
  },
};
