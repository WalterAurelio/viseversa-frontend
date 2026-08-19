import { Link, type LinkProps } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const navAnchorVariants = cva("inline-flex items-center justify-center label-default text-brand-primary", {
  variants: {
    navStyle: {
      fill: "h-10 rounded-full bg-brand-primary px-xl text-neutral-inverse-primary lg:cursor-pointer lg:hover:bg-brand-secondary",
      minimal: "p-none lg:cursor-pointer lg:hover:underline"
    }
  },
  defaultVariants: {
    navStyle: "fill"
  }
});

type NavAnchorProps = LinkProps & VariantProps<typeof navAnchorVariants>;

function NavAnchor({ className, navStyle, children = "Label", ...props }: NavAnchorProps) {
  return (
    <Link className={cn(navAnchorVariants({ navStyle }), className)} {...props}>
      {children}
    </Link>
  );
}

export default NavAnchor;
