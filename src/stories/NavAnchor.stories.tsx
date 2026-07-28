import type { Meta, StoryObj } from '@storybook/react-vite';
import NavAnchor from '../components/NavAnchor';

const meta = {
  title: 'Components/NavAnchor',
  component: NavAnchor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavAnchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlackMinimal: Story = {
  args: {
    to: 'SectionName',
    children: 'Nav Anchor',
    navStyle: 'minimal',
    state: 'idle',
  },
};

export const ActiveMinimal: Story = {
  args: {
    to: 'SectionName',
    children: 'Nav Anchor',
    navStyle: 'minimal',
    state: 'active',
  },
};

export const BlackFill: Story = {
  args: {
    to: 'SectionName',
    children: 'Nav Anchor',
    navStyle: 'fill',
    state: 'idle',
  },
};