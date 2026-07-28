import Avatar from './Avatar';
import IconNText from './IconNText';
import Rating from './RatingStars';
import MapPin from '../assets/icons/MapPin.svg?react';

type AboutUserProps = {
  name: string;
  rating: number;
  biography: string;
  ubication: string;
  publications: number;
  exchanges: number;
};

export default function AboutUser({
  name = 'John Doe',
  rating = 4,
  biography = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ubication = 'Córdoba',
  publications = 24,
  exchanges = 13,
}: AboutUserProps) {
  return (
    <div className='relative w-72 h-fit lg:w-120 lg:h-fit bg-neutral-primary rounded-border-xl flex flex-col gap-xl'>
      <div>
        <div className='bg-brand-secondary w-full h-18 rounded-t-border-xl'></div>
        <div className='border-width-m border-background-neutral-primary absolute top-9 left-6 rounded-full'>
          <Avatar size='L' />
        </div>
      </div>
      <div className='py-xl px-xl flex flex-col gap-m'>
        <div className='flex flex-col gap-xs'>
          <p className='h4'>{name}</p>
          <Rating number={rating}></Rating>
          <p className='text-neutral-tertiary'>{biography}</p>
        </div>
        <IconNText
          size='M'
          icon={<MapPin />}
          customStyle='minimal'
          description={ubication}
        />
        <div className='flex gap-m text-neutral-tertiary'>
          <div>
            <p className='text-center'>{publications}</p>
            <p>Publicaciones</p>
          </div>
          <div>
            <p className='text-center'>{exchanges}</p>
            <p>Intercambios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
