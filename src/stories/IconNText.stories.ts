import type { Meta, StoryObj } from '@storybook/react-vite';
import IconNText from '../components/IconNText';

const meta = {
  title: 'Components/IconNText',
  component: IconNText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconNText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    customStyle: 'minimal',
    size: 'M',
  },
};

export const Outline: Story = {
  args: {
    customStyle: 'outline',
    size: 'M',
  },
};
