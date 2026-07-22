import type { PropsWithChildren } from 'react';

type SelectProps = PropsWithChildren & {
  props?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function Select({ children, ...props }: SelectProps) {
  return (
    <select
      className='flex w-full min-h-9 pr-m pl-l justify-between items-center border-width-s rounded-full border-neutral-inverse-primary select-form'
      {...props}
    >
      {children}
    </select>
  );
}
