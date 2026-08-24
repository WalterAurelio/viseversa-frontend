import type { Meta, StoryObj } from "@storybook/react-vite";
import InputContainer from "../components/InputContainer";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";

const meta = {
  title: "Components/InputContainer",
  component: InputContainer,
  args: {
    label: "Label",
    htmlFor: "input",
    children: <Input name="input" id="input" placeholder="Placeholder" />
  },
  decorators: [
    (Story) => (
      <FormWrapper name="input">
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
