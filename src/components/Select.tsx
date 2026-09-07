import { useFormContext } from "react-hook-form";
import { inputStyles } from "./Input";
import { cn } from "../utils/cn";

type SelectProps<T> = Omit<React.ComponentPropsWithoutRef<"select">, "onChange" | "onBlur"> & {
  name: keyof T & string;
  id: keyof T & string;
};

function Select<T>({ name, id, className, children, ...props }: SelectProps<T>) {
  const { register } = useFormContext();

  return (
    <select {...register(name)} id={id} className={cn(inputStyles, "focus:outline-none", className)} {...props}>
      {children}
    </select>
  );
}
export default Select;
