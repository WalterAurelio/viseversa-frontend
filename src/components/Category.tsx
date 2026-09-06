import { Link, type LinkProps } from "react-router";

function Category({ to = "/", children = "Category", ...props }: LinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center rounded-full bg-brand-tertiary px-l py-m label-default text-neutral-tertiary hover:bg-brand-primary hover:text-neutral-inverse-primary"
      {...props}
    >
      {children}
    </Link>
  );
}
export default Category;
