import { cva, type VariantProps } from 'class-variance-authority';
import Home from '../assets/icons/House.svg?react';
import type { ReactNode } from 'react';

const variants = cva(
  ['flex', 'p-s', 'justify-center', 'items-center', 'rounded-full', 'w-fit'],
  {
    variants: {
      size: {
        M: 'body gap-s',
        S: 'caption gap-s',
        XS: 'caption gap-xs',
      },
      customStyle: {
        fill: 'text-neutral-inverse-primary bg-neutral-inverse-primary',
        outline:
          'border-width-s border-neutral-inverse-secondary text-neutral-tertiary',
        minimal: 'text-neutral-tertiary',
        black: 'text-neutral-primary',
        // white: '' ¿Se usa la variante white? Revisar diseño.
      },
    },
    defaultVariants: {
      size: 'M',
      customStyle: 'fill',
    },
  }
);

type IconNTextProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants> & {
    icon?: ReactNode;
    description?: string;
  };

function IconNText({ icon = <Home />, description = 'Description', size, customStyle, ...props }: IconNTextProps) {
  return (
    <div
      className={variants({ size, customStyle })}
      {...props}
    >
      {icon}
      <span className='select-none'>{description}</span>
    </div>
  );
}
export default IconNText;
