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
    buttonState: 'idle',
    icon: <ArrowLeft />,
  },
};

export const Red: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'fill',
    buttonState: 'idle',
    icon: <ArrowLeft />,
  },
};

export const RedMinimal: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'minimal',
    buttonState: 'idle',
    icon: <ArrowLeft />,
  },
};

export const BlackMinimal: Story = {
  args: {
    children: 'Button',
    colour: 'black',
    buttonStyle: 'minimal',
    buttonState: 'idle',
    icon: <ArrowLeft />,
  },
};

export const FillDisabled: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'fill',
    buttonState: 'disabled',
    icon: <ArrowLeft />,
    disabled: true
  },
};

export const MinimalDisabled: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'minimal',
    buttonState: 'disabled',
    icon: <ArrowLeft />,
    disabled: true
  },
};
