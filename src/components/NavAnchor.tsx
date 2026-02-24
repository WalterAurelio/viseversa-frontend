import { NavLink, type NavLinkProps } from 'react-router';
import { cn } from '../utils/cn';

function NavAnchor({ to, children, ...props }: NavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('body-regular', {
          'lg:hover:underline': !isActive,
          'text-text-brand-primary': isActive
        })
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
export default NavAnchor;
