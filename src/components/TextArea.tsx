type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      className='w-full min-h-27 p-m pl-l rounded-border-l border-width-s border-neutral-inverse-primary bg-neutral-primary'
      {...props}
    ></textarea>
  );
}
export default TextArea;
