import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type InputContainerProps = PropsWithChildren<{
  className?: string;
  label?: string;
  htmlFor?: string;
  errorMsg?: string;
}>;

function InputContainer({ className, label, htmlFor, errorMsg, children }: InputContainerProps) {
  return (
    <div className={cn("flex w-full flex-col items-start gap-xs", className)}>
      <label className={cn("label-default text-neutral-primary", { hidden: !label })} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {errorMsg && <p className="caption-default text-brand-primary">{errorMsg}</p>}
    </div>
  );
}

export default InputContainer;
