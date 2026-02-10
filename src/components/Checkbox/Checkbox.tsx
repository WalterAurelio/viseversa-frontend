import "./Checkbox.css";

export default function Checkbox({ name } : { name: string }) {
  return (
    <div className="bg-(--Main-White) text-(--Placeholder-Grey) border border-(--Border-Grey) p-2 rounded-full text-sm flex gap-1 items-center w-fit">
      <input type="checkbox" id={name} name={name}/>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}