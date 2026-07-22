import type { Meta, StoryObj } from '@storybook/react-vite';
import SocialNetwork from '../components/SocialNetwork';
import Facebook from '../assets/svg/Facebook.svg'
const meta = {
  title: 'Components/SocialNetwork',
  component: SocialNetwork,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialNetwork>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Facebook,
    link: 'https://example.com',
  },
};
