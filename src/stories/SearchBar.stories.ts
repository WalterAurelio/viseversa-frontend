import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from '../components/SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
