import type { Meta, StoryObj } from '@storybook/react-vite';
import HowToCard from '../components/HowToCard';

const meta = {
  title: 'Components/HowToCard',
  component: HowToCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HowToCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
