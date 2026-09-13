import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import { testSchema, type TestSchema } from "../utils/testSchema";
import Button from "../components/Button";

const { Form, InputContainer, Input, Fieldset, Checkbox, Select, Option } = createForm(testSchema);

const handleSubmit = (data: TestSchema) => {
  console.log("Storybook Form submitted", data);
};

const meta = {
  title: "Components/Form",
  component: Form
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: handleSubmit,
    className: "w-96",
    children: (
      <>
        <InputContainer label="Nombre:" htmlFor="name">
          <Input type="text" id="name" name="name" placeholder="Ingresa tu nombre" className="w-full" />
        </InputContainer>
        <InputContainer label="Apellido:" htmlFor="lastName">
          <Input type="text" id="lastName" name="lastName" placeholder="Ingresa tu apellido" className="w-full" />
        </InputContainer>
        <Fieldset legend="Talle:" htmlName="size">
          <Checkbox name="size" id="xs" label="XS" value="XS" />
          <Checkbox name="size" id="s" label="S" value="S" />
          <Checkbox name="size" id="m" label="M" value="M" />
          <Checkbox name="size" id="l" label="L" value="L" />
          <Checkbox name="size" id="xl" label="XL" value="XL" />
          <Checkbox name="size" id="xxl" label="XXL" value="XXL" />
        </Fieldset>
        <InputContainer label="Provincia:" htmlFor="location">
          <Select name="location" id="location" defaultValue="">
            <Option disabled>Seleccione una provincia</Option>
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
        </InputContainer>
        <Button type="submit">Enviar</Button>
      </>
    )
  }
};
