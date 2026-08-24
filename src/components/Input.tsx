import { useFormContext } from "react-hook-form";
import { cn } from "../utils/cn";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  name: string;
  id: string;
};

export const inputStyles =
  "flex h-12 w-72 items-center rounded-border-l border border-neutral-inverse-primary bg-neutral-primary py-m pr-m pl-l focus:border-brand-primary focus:shadow-[0_0_0_3px_#ffeaec]";

function Input({ name, id, className, ...props }: InputProps) {
  const { register } = useFormContext();

  return <input {...register(name)} id={id} className={cn(inputStyles, className)} {...props} />;
}
export default Input;
