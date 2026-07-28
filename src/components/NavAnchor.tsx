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
      minimal: '',
    },
    state: {
      idle: 'lg:cursor-pointer',
      active: 'text-brand-primary',
    },
  },
  compoundVariants: [
    {
      navStyle: 'fill',
      state: 'idle',
      className:
        'bg-neutral-inverse-primary lg:hover:bg-neutral-inverse-tertiary',
    },
    {
      navStyle: 'minimal',
      state: 'idle',
      className: 'text-neutral-primary lg:hover:text-neutral-tertiary',
    },
    {
      navStyle: 'minimal',
      state: 'active'
    },
  ],
  defaultVariants: {
    navStyle: 'minimal',
    state: 'idle',
  },
});

function NavAnchor({
  to,
  state,
  navStyle,
  children,
  ...props
}: NavAnchorProps) {
  return (
    <NavLink to={to} className={cn(variants({ state, navStyle }))} {...props}>
      {children}
    </NavLink>
  );
}
export default NavAnchor;
