import type { Meta, StoryObj } from '@storybook/react-vite';
import Filters from '../components/Filters';

const meta = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Filters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
