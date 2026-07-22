import type { Meta, StoryObj } from '@storybook/react-vite';
import AboutUser from '../components/AboutUser';

const meta = {
  title: 'Components/AboutUser',
  component: AboutUser,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
