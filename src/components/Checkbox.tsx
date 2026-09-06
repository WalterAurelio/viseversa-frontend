import { useFormContext } from "react-hook-form";
import Check from "../assets/icons/Check.svg?react";

type CheckboxProps<T, K extends keyof T> = Omit<React.ComponentPropsWithoutRef<"input">, "onChange" | "onBlur"> & {
  name: K;
  id: string;
  label: string;
  value?: T[K] extends (infer U)[] ? U : never;
};

function Checkbox<T>() {
  return function Checkbox<K extends keyof T>({ name, id, label, value, ...props }: CheckboxProps<T, K>) {
    const { register } = useFormContext();
    return (
      <label
        htmlFor={id}
        className="group inline-flex h-10 cursor-pointer items-center justify-center gap-s rounded-border-l border border-neutral-inverse-primary bg-neutral-primary px-m py-s label-default select-none"
      >
        <input {...register(name)} id={id} type="checkbox" value={value} className="sr-only" {...props} />
        <span className="flex size-5 items-center justify-center rounded-border-s bg-neutral-disabled group-has-checked:bg-neutral-inverse-primary">
          <Check className="hidden size-3 text-neutral-inverse-primary group-has-checked:block" />
        </span>
        {label}
      </label>
    );
  };
}
export default Checkbox;
