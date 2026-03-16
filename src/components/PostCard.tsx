import { NavLink } from 'react-router';
import Image from '../assets/icons/Image.svg?react';
import MapPin from '../assets/icons/MapPin.svg?react';
import IconNText from './IconNText';

type PostCardProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
  ubication: string;
};

export default function PostCard({
  img,
  alt = '',
  title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  description = 'Etiam suscipit semper nulla, ullamcorper porttitor lectus pellentesque aliquam.',
  ubication = 'Córdoba',
}: PostCardProps) {
  return (
    <NavLink to='/' className='flex flex-col w-72 h-98 lg:h-102 bg-background-neutral-primary rounded-border-l justify-center'>
      <div className='relative'>
        {img ? (
          <img
            src={img}
            alt={alt}
            className='relative aspect-square object-cover object-center rounded-t-border-l'
          />
        ) : (
          <div className='relative aspect-square bg-background-neutral-tertiary flex items-center justify-center rounded-t-border-l'>
            <Image className='h-6 w-6' />
          </div>
        )}
        <div className='absolute bottom-3 left-3'>
          <IconNText size='S' icon={<MapPin />} description={ubication} />
        </div>
      </div>
      <div className='flex flex-col py-m px-m gap-s'>
        <p className='body-bold line-clamp-2 leading-[19.2px] overflow-hidden text-ellipsis'>
          {title}
        </p>
        <div className='small-normal leading-[12.288px] lg:leading-[15.36px] flex flex-col gap-xs'>
          <p className='small-bold text-text-brand-primary'>En busca de:</p>
          <p className='overflow-hidden text-ellipsis'>{description}</p>
        </div>
      </div>
    </NavLink>
  );
}
