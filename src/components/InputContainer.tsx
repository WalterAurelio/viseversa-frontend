import type { PropsWithChildren } from 'react';
import Dummy from './Dummy';

type InputContainerProps = PropsWithChildren & {
  label?: string;
  errorMsg?: string;
};

function InputContainer({ label, errorMsg, children }: InputContainerProps) {
  return (
    <div className='flex flex-col gap-s'>
      {label && <label className='text-text-neutral-primary body-bold'>{label}</label>}
      {children ? children : <Dummy />}
      {errorMsg && <p className='text-text-brand-primary small-regular'>{errorMsg}</p>}
    </div>
  );
}
export default InputContainer;
