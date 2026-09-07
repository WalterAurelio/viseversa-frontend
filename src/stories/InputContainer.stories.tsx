import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema } from "../utils/testSchema";
import FormWrapper from "../components/FormWrapper";

const { InputContainer, Input, Select, Option } = createForm(testSchema);

const meta = {
  title: "Components/InputContainer",
  component: InputContainer
} satisfies Meta<typeof InputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
    label: "Nombre:",
    htmlFor: "name",
    children: <Input name="name" id="name" placeholder="Ingresa tu nombre" />
  },
  decorators: [
    (Story) => (
      <FormWrapper htmlName="name">
        <Story />
      </FormWrapper>
    )
  ]
};

export const SelectStory: Story = {
  args: {
    label: "Provincia:",
    htmlFor: "province",
    children: (
      <Select name="province" id="province" defaultValue="">
        <Option disabled>Seleccione una provincia</Option>
        <Option field="province" value="buenos-aires">
          Buenos Aires
        </Option>
        <Option field="province" value="cordoba">
          Córdoba
        </Option>
        <Option field="province" value="santa-fe">
          Santa Fe
        </Option>
      </Select>
    )
  },
  decorators: [
    (Story) => (
      <FormWrapper htmlName="province">
        <Story />
      </FormWrapper>
    )
  ]
};
