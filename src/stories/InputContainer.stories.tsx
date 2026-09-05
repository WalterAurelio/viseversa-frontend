import type { Meta, StoryObj } from "@storybook/react-vite";
import InputContainer from "../components/InputContainer";
import Input from "../components/Input";
import FormWrapper from "../components/FormWrapper";
import type { TestSchema } from "../utils/testSchema";

const meta = {
  title: "Components/InputContainer",
  component: InputContainer<TestSchema>,
  args: {
    label: "Nombre:",
    htmlFor: "name",
    children: <Input<TestSchema> name="name" id="name" placeholder="Ingresa tu nombre" />
  },
  decorators: [
    (Story) => (
      <FormWrapper<TestSchema> htmlName="name">
        <Story />
      </FormWrapper>
    )
  ]
} satisfies Meta<typeof InputContainer<TestSchema>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
