import './Checkbox.css';

export default function Checkbox({ name = 'Label'}: { name: string }) {
  return (
    <label
      className='bg-neutral-primary text-neutral-secondary border-width-s border-neutral-inverse-primary p-s rounded-full caption-normal flex gap-xs items-center w-fit'
      htmlFor={name}
    >
      <input className='input-checkbox' type='checkbox' id={name} name={name} />
      {name}
    </label>
  );
}
