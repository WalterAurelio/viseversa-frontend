type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className='w-full min-h-27 p-m pl-l rounded-custom-l border-custom-s border-border-neutral-inverse-primary bg-background-neutral-primary outline-0 resize-none placeholder:text-text-neutral-tertiary body-regular'
      {...props}
    ></textarea>
  );
}
export default TextArea;
