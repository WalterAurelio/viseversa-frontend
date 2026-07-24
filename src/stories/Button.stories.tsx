import type { Meta, StoryObj } from '@storybook/react-vite';
import ArrowLeft from '../assets/icons/ArrowLeft.svg?react';
import Button from '../components/Button.tsx';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    children: 'Button',
    colour: 'black',
    buttonStyle: 'fill',
    state: 'idle',
    icon: <ArrowLeft />,
  },
};

export const Red: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'fill',
    state: 'idle',
    icon: <ArrowLeft />,
  },
};

export const RedMinimal: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'minimal',
    state: 'idle',
    icon: <ArrowLeft />,
  },
};

export const BlackMinimal: Story = {
  args: {
    children: 'Button',
    colour: 'black',
    buttonStyle: 'minimal',
    state: 'idle',
    icon: <ArrowLeft />,
  },
};

export const FillDisabled: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'fill',
    state: 'disabled',
    icon: <ArrowLeft />,
  },
};

export const MinimalDisabled: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'minimal',
    state: 'disabled',
    icon: <ArrowLeft />,
  },
};
