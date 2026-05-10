import { NavLink } from 'react-router';
import Image from '../assets/icons/Image.svg?react'
type CategoryProps = {
  name: string;
  imageUrl?: string;
};

export default function Category({ name, imageUrl }: CategoryProps) {
  return (
    <NavLink
      to={`/${name}`}
      className='w-33.5 h-16 small-bold bg-neutral-primary gap-s p-s lg:p-l flex items-center rounded-border-m lg:rounded-border-l border-width-s border-neutral-inverse-primary overflow-hidden lg:w-56 lg:h-22 lg:gap-l cursor-pointer hover:text-brand-primary hover:border-brand-primary'
    >
      {imageUrl ? (
        <img className='w-12 lg:w-14' src={imageUrl} alt={name} />
      ) : (
        <div className='h-12 aspect-square flex items-center justify-center lg:h-14 bg-neutral-disabled'><Image/></div>
      )}
      <p className='w-full text-center'>{name}</p>
    </NavLink>
  );
}
