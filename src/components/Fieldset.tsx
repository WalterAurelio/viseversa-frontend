import type { PropsWithChildren } from 'react';
import Dummy from './Dummy';

type FieldsetProps = PropsWithChildren & {
  legend?: string;
  errorMsg?: string;
};

function Fieldset({ legend, errorMsg, children }: FieldsetProps) {
  return (
    <fieldset className='flex flex-col gap-s'>
      {legend && <legend className='text-text-neutral-primary body-bold'>{legend}</legend>}
      {children ? children : <Dummy />}
      {errorMsg && <p className='text-text-brand-primary small-normal'>{errorMsg}</p>}
    </fieldset>
  );
}
export default Fieldset;
