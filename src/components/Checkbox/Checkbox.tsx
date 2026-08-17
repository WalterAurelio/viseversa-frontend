import './Checkbox.css';

export default function Checkbox({ name = 'Label' }: { name?: string }) {
  return (
    <label
      className="flex w-fit items-center gap-xs rounded-full border-width-s border-neutral-inverse-primary bg-neutral-primary p-s caption-normal text-neutral-secondary"
      htmlFor={name}
    >
      <input className="input-checkbox" type="checkbox" id={name} name={name} />
      {name}
    </label>
  );
}
