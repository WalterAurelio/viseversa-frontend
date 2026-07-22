import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionTitle } from '../components/SectionTitle';

const meta = {
  title: 'Components/SectionTitle',
  component: SectionTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Section Title',
    size: 'm',
    colour: 'black',
  },
};
