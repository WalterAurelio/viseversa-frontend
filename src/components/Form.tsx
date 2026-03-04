type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

function Form({ children, ...props }: FormProps) {
  return (
    <form
      className='flex p-l flex-col justify-center items-center gap-l rounded-border-xl bg-background-neutral-primary lg:p-xl'
      {...props}
    >
      {children}
    </form>
  );
}
export default Form;
