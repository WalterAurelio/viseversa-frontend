import type { Meta, StoryObj } from "@storybook/react-vite";
import InputContainer from "../components/InputContainer";
import Input from "../components/Input";

const meta = {
  title: "Components/InputContainer",
  component: InputContainer,
  args: {
    label: "Label",
    htmlFor: "input-id",
    errorMsg: "Error message",
    children: <Input id="input-id" placeholder="Placeholder" />
  }
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
