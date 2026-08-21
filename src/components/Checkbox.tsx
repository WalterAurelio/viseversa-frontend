import Check from "../assets/icons/Check.svg?react";

type CheckboxProps = React.ComponentProps<"input"> & {
  label: string;
};

function Checkbox({ label = "Label", id = "some-id", ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="group inline-flex h-10 cursor-pointer items-center justify-center gap-s rounded-border-l border border-neutral-inverse-primary bg-neutral-primary px-m py-s label-default select-none"
    >
      <input type="checkbox" id={id} name={label} className="sr-only" {...props} />
      <span className="flex size-5 items-center justify-center rounded-border-s bg-neutral-disabled group-has-checked:bg-neutral-inverse-primary">
        <Check className="hidden size-3 text-neutral-inverse-primary group-has-checked:block" />
      </span>
      {label}
    </label>
  );
}
export default Checkbox;
