import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from '../components/Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <option value=''>Seleccionar ubicación</option>
      <option value='Buenos Aires'>Buenos Aires</option>
      <option value='Mendoza'>Mendoza</option>
      <option value='Mendoza'>Entre Rios</option>
      <option value='Mendoza'>Jujuy</option>
    </Select>
  ),
};
