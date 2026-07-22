import { NavLink, type NavLinkProps } from 'react-router';
import { cn } from '../utils/cn';
import type { PropsWithChildren } from 'react';

type NavAnchorProps = NavLinkProps & PropsWithChildren

function NavAnchor({ to, children, ...props }: NavAnchorProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn({
          'lg:hover:underline': !isActive,
          'text-brand-primary': isActive,
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
export default NavAnchor;
