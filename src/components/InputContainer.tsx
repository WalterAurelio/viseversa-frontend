import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";
import { useFormContext } from "react-hook-form";

type InputContainerProps = PropsWithChildren<{
  className?: string;
  label: string;
  htmlFor: string;
}>;

function InputContainer({ className, label, htmlFor, children }: InputContainerProps) {
  const {
    formState: { errors }
  } = useFormContext();
  const errorMsg = errors[htmlFor]?.message as string | undefined;

  return (
    <div className={cn("flex w-full flex-col items-start gap-xs", className)}>
      <label className="label-default text-neutral-primary" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {errorMsg && <p className="caption-default text-brand-primary">{errorMsg}</p>}
    </div>
  );
}

export default InputContainer;
