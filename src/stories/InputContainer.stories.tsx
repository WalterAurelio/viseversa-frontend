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
    label: "Ubicación:",
    htmlFor: "location",
    children: (
      <Select name="location" id="location" defaultValue="">
        <Option disabled>Seleccione una ubicación</Option>
        <Option field="location" value="buenos-aires">
          Buenos Aires
        </Option>
        <Option field="location" value="cordoba">
          Córdoba
        </Option>
        <Option field="location" value="santa-fe">
          Santa Fe
        </Option>
      </Select>
    )
  },
  decorators: [
    (Story) => (
      <FormWrapper htmlName="location">
        <Story />
      </FormWrapper>
    )
  ]
};
