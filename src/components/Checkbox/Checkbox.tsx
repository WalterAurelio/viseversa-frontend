import './Checkbox.css';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Checkbox({ label = 'Label', ...props }: CheckboxProps) {
  return (
    <label
      className="flex w-fit items-center gap-xs rounded-full border-width-s border-neutral-inverse-primary bg-neutral-primary p-s caption-normal text-neutral-secondary"
      htmlFor={label}
    >
      <input
        {...props}
        className="input-checkbox"
        type="checkbox"
        id={label}
        value={label}
      />
      {label}
    </label>
  );
}
