type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps) {
  return (
    <input
      className='flex w-full min-h-9 pr-m pl-l justify-between items-center border-custom-s rounded-full border-border-neutral-inverse-primary outline-0 placeholder:text-text-neutral-tertiary body-regular'
      {...props}
    />
  );
}
export default Input;
