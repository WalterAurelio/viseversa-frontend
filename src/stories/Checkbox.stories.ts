import type { Meta, StoryObj } from '@storybook/react-vite';
import Checkbox from '../components/Checkbox/Checkbox';
import '../components/Checkbox/Checkbox.css'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {};