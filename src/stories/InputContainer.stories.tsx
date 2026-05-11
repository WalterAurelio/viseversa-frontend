import type { Meta, StoryObj } from '@storybook/react-vite';
import InputContainer from '../components/InputContainer';
import Input from '../components/Input';

const meta = {
  title: 'Components/InputContainer',
  component: InputContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label:',
    htmlFor: 'username',
    errorMsg: 'Error Message' 
  },
};

export const WithInput: Story = {
  args: {
    label: 'Label:',
    htmlFor: 'username',
    children: <Input placeholder='Placeholder'/>,
    errorMsg: 'Error Message' 
  },
};