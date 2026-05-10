import type { PropsWithChildren } from 'react';
import Dummy from './Dummy';

type InputContainerProps = PropsWithChildren & {
  label?: string;
  htmlFor: string;
  errorMsg?: string;
};

function InputContainer({ label, htmlFor, errorMsg, children }: InputContainerProps) {
  return (
    <div className='flex flex-col gap-s'>
      <label
        htmlFor={htmlFor}
        className='text-neutral-primary body-bold select-none'
      >
        {label}
      </label>
      {children ? children : <Dummy />}
      {errorMsg && (
        <p className='text-brand-primary small-normal'>{errorMsg}</p>
      )}
    </div>
  );
}
export default InputContainer;
