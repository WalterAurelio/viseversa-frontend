import * as z4 from "zod/v4/core";
import FormComponent from "../components/Form";
import InputContainerComponent from "../components/InputContainer";
import InputComponent from "../components/Input";
import FieldsetComponent from "../components/Fieldset";
import CheckboxComponent from "../components/Checkbox";

export function createForm<T extends z4.$ZodObject>(schema: T) {
  type FormData = z4.infer<T>;

  const Form = ({ ...props }: Omit<React.ComponentProps<typeof FormComponent>, "schema">) => FormComponent({ schema, ...props });

  const InputContainer = InputContainerComponent<FormData>;
  const Input = InputComponent<FormData>;
  const Fieldset = FieldsetComponent<FormData>;
  const Checkbox = CheckboxComponent<FormData>();

  return { Form, InputContainer, Input, Fieldset, Checkbox };
}
