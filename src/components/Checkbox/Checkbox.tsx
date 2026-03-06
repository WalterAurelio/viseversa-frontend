import './Checkbox.css';

export default function Checkbox({ name }: { name: string }) {
  return (
    <label
      className='bg-background-neutral-primary text-text-neutral-secondary border-width-s border-border-neutral-inverse-primary p-s rounded-full small-normal flex gap-xs items-center w-fit'
      htmlFor={name}
    >
      <input className='input-checkbox' type='checkbox' id={name} name={name} />
      {name}
    </label>
  );
}
