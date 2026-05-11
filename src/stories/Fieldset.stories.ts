import type { Meta, StoryObj } from '@storybook/react-vite';
import Fieldset from '../components/Fieldset';

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'label:',
    errorMsg: 'Error message'
  },
};
