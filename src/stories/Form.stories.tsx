import type { Meta, StoryObj } from "@storybook/react-vite";
import Form from "../components/Form";
import InputContainer from "../components/InputContainer";
import Input from "../components/Input";
import Button from "../components/Button";
import { z } from "zod";
import Fieldset from "../components/Fieldset";
import Checkbox from "../components/Checkbox";

const schema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  lastName: z.string().min(1, { message: "El apellido es requerido" }),
  size: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"]), "Debes seleccionar al menos un talle").nonempty("Debes seleccionar al menos un talle")
});

const meta = {
  title: "Components/Form",
  component: Form
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schema,
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
          <Checkbox name="size" id="size-xs" label="XS" value="XS" />
          <Checkbox name="size" id="size-s" label="S" value="S" />
          <Checkbox name="size" id="size-m" label="M" value="M" />
          <Checkbox name="size" id="size-l" label="L" value="L" />
          <Checkbox name="size" id="size-xl" label="XL" value="XL" />
          <Checkbox name="size" id="size-xxl" label="XXL" value="XXL" />
        </Fieldset>
        <Button type="submit">Enviar</Button>
      </>
    )
  }
};
