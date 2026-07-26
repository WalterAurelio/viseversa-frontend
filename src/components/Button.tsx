import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { ReactNode } from 'react';

const variants = cva(
  [
    'inline-flex',
    'h-10.75',
    'min-w-28.5',
    'px-m',
    'justify-center',
    'items-center',
    'gap-xs',
    'rounded-border-s',
    'caption-bold lg:label'
  ],
  {
    variants: {
      colour: {
        black: '',
        red: '',
      },
      buttonStyle: {
        fill: 'text-neutral-inverse-primary',
        minimal: '',
      },
      state: {
        idle: 'lg:cursor-pointer',
        disabled: '',
      },
    },
    compoundVariants: [
      {
        colour: 'black',
        buttonStyle: 'fill',
        state: 'idle',
        className:
          'bg-neutral-inverse-primary lg:hover:bg-neutral-inverse-tertiary',
      },
      {
        colour: 'red',
        buttonStyle: 'fill',
        state: 'idle',
        className: 'bg-brand-primary lg:hover:bg-brand-secondary',
      },
      {
        colour: 'black',
        buttonStyle: ['minimal'],
        state: 'idle',
        className: 'text-neutral-primary lg:hover:border-b-width-m',
      },
      {
        colour: 'red',
        buttonStyle: ['minimal'],
        state: 'idle',
        className: 'text-brand-primary lg:hover:border-b-width-m',
      },
      {
        colour: ['black', 'red'],
        buttonStyle: ['fill'],
        state: 'disabled',
        className: 'bg-neutral-disabled text-neutral-disabled',
      },
      {
        colour: ['black', 'red'],
        buttonStyle: ['minimal'],
        state: 'disabled',
        className: 'text-neutral-disabled',
      },
    ],
    defaultVariants: {
      colour: 'black',
      buttonStyle: 'fill',
      state: 'idle',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    icon?: ReactNode;
  };

function Button({ colour, buttonStyle, state, icon, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(variants({ colour, buttonStyle, state }))}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
export default Button;
