import type { Meta, StoryObj } from '@storybook/react-vite';
import FileUpload from '../components/FileUpload';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Default: Story = {
};