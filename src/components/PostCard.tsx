import { NavLink } from "react-router";
import Image from "../assets/icons/Image.svg?react";

type PostCardProps = {
  img?: string;
  alt?: string;
  title?: string;
  description?: string;
  // ubication: string;
};

export default function PostCard({
  img,
  alt = "",
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description = "Etiam suscipit semper nulla, ullamcorper porttitor lectus pellentesque aliquam."
  // ubication = 'Córdoba',
}: PostCardProps) {
  return (
    <NavLink to="/" className="flex h-97.5 w-72 flex-col justify-center rounded-border-l bg-neutral-primary lg:h-102">
      <div className="relative">
        {img ? (
          <img src={img} alt={alt} className="relative aspect-square rounded-t-border-l object-cover object-center" />
        ) : (
          <div className="relative flex aspect-square items-center justify-center rounded-t-border-l bg-neutral-tertiary">
            <Image className="h-6 w-6" />
          </div>
        )}
        <div className="absolute bottom-3 left-3">{/* <IconNText size='S' icon={<MapPin />} description={ubication} /> */}</div>
      </div>
      <div className="flex flex-col gap-s px-m py-m">
        <p className="label line-clamp-2 overflow-hidden leading-[19.2px] text-ellipsis">{title}</p>
        <div className="flex flex-col gap-xs caption-default leading-[12.288px] lg:leading-[15.36px]">
          <p className="label text-brand-primary">En busca de:</p>
          <p className="overflow-hidden text-ellipsis">{description}</p>
        </div>
      </div>
    </NavLink>
  );
}
