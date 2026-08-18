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
    'rounded-border-l',
    'label'
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
      buttonState: {
        idle: 'lg:cursor-pointer',
        disabled: '',
      },
    },
    compoundVariants: [
      {
        colour: 'black',
        buttonStyle: 'fill',
        buttonState: 'idle',
        className:
          'bg-neutral-inverse-primary lg:hover:bg-neutral-inverse-tertiary',
      },
      {
        colour: 'red',
        buttonStyle: 'fill',
        buttonState: 'idle',
        className: 'bg-brand-primary lg:hover:bg-brand-secondary',
      },
      {
        colour: 'black',
        buttonStyle: ['minimal'],
        buttonState: 'idle',
        className: 'text-neutral-primary lg:hover:border-b-width-m',
      },
      {
        colour: 'red',
        buttonStyle: ['minimal'],
        buttonState: 'idle',
        className: 'text-brand-primary lg:hover:border-b-width-m',
      },
      {
        colour: ['black', 'red'],
        buttonStyle: ['fill'],
        buttonState: 'disabled',
        className: 'bg-neutral-disabled text-neutral-disabled',
      },
      {
        colour: ['black', 'red'],
        buttonStyle: ['minimal'],
        buttonState: 'disabled',
        className: 'text-neutral-disabled',
      },
    ],
    defaultVariants: {
      colour: 'black',
      buttonStyle: 'fill',
      buttonState: 'idle',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    icon?: ReactNode;
  };

function Button({ colour, buttonStyle, buttonState, disabled, icon, children, ...props }: ButtonProps) {
  const isDisabled = disabled || buttonState === 'disabled' ? 'disabled' : buttonState;

  return (
    <button
      className={cn(variants({ colour, buttonStyle, buttonState }))}
      disabled={isDisabled === 'disabled'}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
export default Button;
