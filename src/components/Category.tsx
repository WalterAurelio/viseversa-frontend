import { NavLink } from "react-router";
import Image from "../assets/icons/Image.svg?react";
type CategoryProps = {
  name: string;
  imageUrl?: string;
};

export default function Category({ name, imageUrl }: CategoryProps) {
  return (
    <NavLink
      to={`/${name}`}
      className="flex h-16 w-33.5 cursor-pointer items-center gap-s overflow-hidden rounded-border-m border-width-s border-neutral-inverse-primary bg-neutral-primary p-s caption-default hover:border-brand-primary hover:text-brand-primary lg:h-22 lg:w-56 lg:gap-l lg:rounded-border-l lg:p-l"
    >
      {imageUrl ? (
        <img className="w-12 lg:w-14" src={imageUrl} alt={name} />
      ) : (
        <div className="flex aspect-square h-12 items-center justify-center bg-neutral-disabled lg:h-14">
          <Image />
        </div>
      )}
      <p className="w-full text-center">{name}</p>
    </NavLink>
  );
}
