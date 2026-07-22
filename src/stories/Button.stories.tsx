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
  },
};

export const Red: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'fill',
    state: 'idle',
  },
};

export const BlackOutline: Story = {
  args: {
    children: 'Button',
    colour: 'black',
    buttonStyle: 'outline',
    state: 'idle',
  },
};


export const RedOutline: Story = {
  args: {
    children: 'Button',
    colour: 'red',
    buttonStyle: 'outline',
    state: 'idle',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    colour: 'black',
    buttonStyle: 'outline',
    state: 'idle',
    icon: <ArrowLeft />,
  },
};
