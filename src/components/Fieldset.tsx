import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";
import { useFormContext } from "react-hook-form";

type FieldsetProps = PropsWithChildren<{
  className?: string;
  legend: string;
  htmlName: string;
}>;

function Fieldset({ className, legend, htmlName, children }: FieldsetProps) {
  const {
    formState: { errors }
  } = useFormContext();
  const errorMsg = errors[htmlName]?.message as string | undefined;

  return (
    <fieldset className={cn("flex w-full flex-wrap items-start gap-xs", className)}>
      <legend className="mb-xs label-default text-neutral-primary">{legend}</legend>
      {children}
      {errorMsg && <p className="w-full caption-default text-brand-primary">{errorMsg}</p>}
    </fieldset>
  );
}
export default Fieldset;
