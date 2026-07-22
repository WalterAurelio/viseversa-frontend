import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionBody from '../components/SectionBody';

const meta = {
  title: 'Components/SectionBody',
  component: SectionBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies eros at sapien sollicitudin accumsan.',
  },
};
