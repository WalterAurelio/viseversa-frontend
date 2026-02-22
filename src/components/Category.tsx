type CategoryProps = {
    name: string;
    imageUrl: string;
}

export default function Category({ name, imageUrl } : CategoryProps ) {
  return (
    <div className="w-33.5 bg-background-neutral-primary pr-4 flex items-center rounded-(--radius-s) border border-border-neutral-inverse-primary overflow-hidden lg:w-55.5 lg:h-19.5 lg:gap-2 cursor-pointer">
      <img className="w-14 lg:w-20" src={imageUrl} alt={name} />
      <p className="w-full text-small text-center lg:text-base">{name}</p>
    </div>
  )
}
