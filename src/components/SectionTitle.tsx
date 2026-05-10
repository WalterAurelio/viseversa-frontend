import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva([], {
  variants: {
    size: {
      s: 'body-bold',
      m: 'h5-bold',
      l: 'h4-bold',
    },
    colour: {
      black: 'text-neutral-primary',
      red: 'text-brand-primary',
      white: 'text-neutral-inverse-primary',
    },
  },
  defaultVariants: {
    colour: 'black',
    size: 'm',
  },
});

type SectionTitleProps = VariantProps<typeof variants> & {
  title: string;
};

export function SectionTitle({ title, size, colour }: SectionTitleProps) {
  return <h2 className={cn(variants({ size, colour }))}>{title}</h2>;
}
