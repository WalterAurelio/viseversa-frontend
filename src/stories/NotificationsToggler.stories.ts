import type { Meta, StoryObj } from '@storybook/react-vite';
import NotificationsToggler from '../components/NotificationsToggler';

const meta = {
  title: 'Components/NotificationsToggler',
  component: NotificationsToggler,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationsToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifs: [
      {
        username: 'John123',
        type: 'comentario',
        imgPost: '',        
        postTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        username: 'MarieDoe',
        type: 'solicitudIntercambio',
        imgPost: '',
        postTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
    ],
  },
};
