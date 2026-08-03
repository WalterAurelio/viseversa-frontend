import { NavLink, type NavLinkProps } from 'react-router';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import type { PropsWithChildren } from 'react';

type NavAnchorProps = NavLinkProps &
  PropsWithChildren &
  VariantProps<typeof variants>;

const variants = cva(['label flex'], {
  variants: {
    navStyle: {
      fill: 'text-neutral-inverse-primary rounded-border-s px-l items-center justify-center min-h-8.75 w-fit',
      minimal: 'text-brand-primary',
    },
    navState: {
      idle: 'lg:cursor-pointer',
      active: '',
    },
  },
  compoundVariants: [
    {
      navStyle: 'fill',
      navState: 'idle',
      className:
        'bg-neutral-inverse-primary lg:hover:bg-neutral-inverse-tertiary',
    },
    {
      navStyle: 'fill',
      navState: 'active',
      className:
        'bg-brand-primary lg:hover:bg-neutral-inverse-tertiary',
    },
    {
      navStyle: 'minimal',
      navState: 'active',
      className: 'underline underline-offset-2',
    },
  ],
  defaultVariants: {
    navStyle: 'minimal',
    navState: 'idle',
  },
});

function NavAnchor({
  to,
  navStyle,
  children,
  ...props
}: NavAnchorProps) {
  return (
    <NavLink to={to} className={({isActive}) => cn(variants({ navState: isActive ? 'active' : 'idle', navStyle }))} {...props}>
      {children}
    </NavLink>
  );
}
export default NavAnchor;
