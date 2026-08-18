import type { PropsWithChildren } from "react";
import Dummy from "./Dummy";

type FieldsetProps = PropsWithChildren & {
  legend?: string;
  errorMsg?: string;
};

function Fieldset({ legend, errorMsg, children }: FieldsetProps) {
  return (
    <fieldset className="flex flex-col gap-s">
      {legend && <legend className="label text-neutral-primary">{legend}</legend>}
      {children ? children : <Dummy />}
      {errorMsg && <p className="caption-default text-brand-primary">{errorMsg}</p>}
    </fieldset>
  );
}
export default Fieldset;
