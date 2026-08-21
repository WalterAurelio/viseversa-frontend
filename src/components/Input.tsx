function Input({ className, ...props }: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={`flex h-12 w-72 items-center rounded-border-l border border-neutral-inverse-primary bg-neutral-primary py-m pr-m pl-l focus:border-brand-primary focus:shadow-[0_0_0_3px_#ffeaec] ${className}`}
      {...props}
    />
  );
}
export default Input;
