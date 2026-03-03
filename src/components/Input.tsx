type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps) {
  return (
    <input
      className='flex w-full min-h-9 pr-m pl-l justify-between items-center border-width-s rounded-full border-border-neutral-inverse-primary'
      {...props}
    />
  );
}
export default Input;
