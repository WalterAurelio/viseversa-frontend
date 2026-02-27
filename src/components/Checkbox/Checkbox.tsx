import './Checkbox.css';

export default function Checkbox({ name }: { name: string }) {
  return (
    <label
      className='bg-background-neutral-primary text-text-neutral-tertiary border border-border-neutral-inverse-primary p-2 rounded-full text-small flex gap-1 items-center w-fit'
      htmlFor={name}
    >
      <input type='checkbox' id={name} name={name} />
      {name}
    </label>
  );
}
