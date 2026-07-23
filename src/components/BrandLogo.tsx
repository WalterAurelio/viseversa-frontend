import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const variants = cva(['font-Serif h1'], {
  variants: {
    colour: {
      black: 'text-neutral-primary',
      white: 'text-neutral-inverse-primary',
    },
  },
  defaultVariants: {
    colour: 'black',
  },
});

type BrandLogoProps = VariantProps<typeof variants> & {
  name: string;
};

export default function BrandLogo({ name, colour }: BrandLogoProps) {
  return <p className={cn(variants({ colour }))}>{name}</p>;
}
