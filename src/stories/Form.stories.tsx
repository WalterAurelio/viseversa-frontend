import type { Meta, StoryObj } from "@storybook/react-vite";
import { createForm } from "../utils/createForm";
import Button from "../components/Button";
import { testSchema } from "../utils/testSchema";

const { Form, InputContainer, Input, Fieldset, Checkbox } = createForm(testSchema);

const meta = {
  title: "Components/Form",
  component: Form
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
        <Button type="submit">Enviar</Button>
      </>
    )
  }
};
