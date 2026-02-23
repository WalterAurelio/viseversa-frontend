import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva(['inline-flex', 'h-9', 'min-w-28.5', 'px-m', 'justify-center', 'items-center', 'gap-s', 'rounded-full', 'body-regular'], {
  variants: {
    colour: {
      black: '',
      red: ''
    },
    buttonStyle: {
      fill: 'text-text-neutral-inverse-primary',
      outline: 'border-custom-s lg:hover:border-custom-m',
      minimal: 'lg:hover:border-b-custom-s'
    },
    state: {
      idle: 'lg:cursor-pointer',
      disabled: ''
    }
  },
  compoundVariants: [
    {
      colour: 'black',
      buttonStyle: 'fill',
      state: 'idle',
      className: 'bg-background-neutral-inverse-primary lg:hover:bg-background-neutral-inverse-secondary'
    },
    {
      colour: 'red',
      buttonStyle: 'fill',
      state: 'idle',
      className: 'bg-background-brand-primary lg:hover:bg-background-brand-secondary'
    },
    {
      colour: 'black',
      buttonStyle: ['outline', 'minimal'],
      state: 'idle',
      className: 'text-text-neutral-primary'
    },
    {
      colour: 'red',
      buttonStyle: ['outline', 'minimal'],
      state: 'idle',
      className: 'text-text-brand-primary'
    },
    {
      colour: ['black', 'red'],
      buttonStyle: ['fill', 'outline', 'minimal'],
      state: 'disabled',
      className: 'bg-background-neutral-disabled text-text-neutral-disabled'
    }
  ],
  defaultVariants: {
    colour: 'black',
    buttonStyle: 'fill',
    state: 'idle'
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

function Button({ colour, buttonStyle, state, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(variants({ colour, buttonStyle, state }))}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
