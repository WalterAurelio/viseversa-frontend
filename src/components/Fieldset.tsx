import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type FieldsetProps = PropsWithChildren<{
  className?: string;
  legend?: string;
  errorMsg?: string;
}>;

function Fieldset({ className, legend, errorMsg, children }: FieldsetProps) {
  return (
    <fieldset className={cn("flex w-full flex-col items-start gap-xs", className)}>
      <legend className={cn("mb-xs label-default text-neutral-primary", { hidden: !legend })}>{legend}</legend>
      {children}
      {errorMsg && <p className="caption-default text-brand-primary">{errorMsg}</p>}
    </fieldset>
  );
}
export default Fieldset;
