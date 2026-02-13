// import { cva, VariantProps } from 'class-variance-authority';

/* const variants = cva(['inline-flex h-9 min-w-28.5 px-3 justify-center items-center gap-2 rounded-full bg-background-neutral-inverse-primary'], {
  variants: {},
  // compoundVariants: {},
  defaultVariants: {}
}); */

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className=''
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
