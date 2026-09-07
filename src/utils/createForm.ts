import * as z4 from "zod/v4/core";
import FormComponent from "../components/Form";
import InputContainerComponent from "../components/InputContainer";
import InputComponent from "../components/Input";
import FieldsetComponent from "../components/Fieldset";
import CheckboxComponent from "../components/Checkbox";
import SelectComponent from "../components/Select";
import OptionComponent from "../components/Option";

export function createForm<T extends z4.$ZodObject>(schema: T) {
  type FormData = z4.infer<T>;

  const Form = ({ ...props }: Omit<React.ComponentProps<typeof FormComponent>, "schema">) => FormComponent({ schema, ...props });

  const InputContainer = InputContainerComponent<FormData>;
  const Input = InputComponent<FormData>;
  const Fieldset = FieldsetComponent<FormData>;
  const Checkbox = CheckboxComponent<FormData>();
  const Select = SelectComponent<FormData>;
  const Option = OptionComponent<FormData>();

  return { Form, InputContainer, Input, Fieldset, Checkbox, Select, Option };
}
