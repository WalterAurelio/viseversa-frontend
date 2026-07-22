import type { Meta, StoryObj } from '@storybook/react-vite';
import Form from '../components/Form';
import Input from '../components/Input';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className='flex flex-col gap-2'>
        <Input placeholder='Ingresar nombre' />
        <Input placeholder='Ingresar apellido' />
        <Input placeholder='Ingresar usuario' />
        <Input placeholder='Ingresar email' />
      </div>
    ),
  },
};
