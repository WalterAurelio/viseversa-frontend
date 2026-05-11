import type { Meta, StoryObj } from '@storybook/react-vite';
import BrandLogo from '../components/BrandLogo';

const meta = {
  title: 'Components/BrandLogo',
  component: BrandLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BrandLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'ViseVersa',
    colour: 'black',
  },
};
