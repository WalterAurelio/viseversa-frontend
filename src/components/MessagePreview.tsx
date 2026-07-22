import { NavLink } from 'react-router';
import Image from '../assets/icons/Image.svg?react';
import { useState } from 'react';

type MessagePreviewProps = {
  postTitle: string;
  message: string;
  time: string;
  img?: string;
};

export default function MessagePreview({
  img = '',
  postTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  time = '10:00',
}: MessagePreviewProps) {
  const [wasRead, setWasRead] = useState(false);

  return (
    <NavLink
      to={`/${postTitle}`}
      className={({ isActive }) =>
        `flex gap-s w-[288px] lg:w-100 lg:h-16 items-center hover:bg-brand-tertiary ${isActive ? 'bg-brand-tertiary' : ''} rounded-border-s justify-evenly px-s py-xs`
      }
      onClick={() => setWasRead(true)}
    >
      {img ? (
        <img className='w-12 lg:w-14' src={img} alt='Imagen del producto' />
      ) : (
        <div className='h-12 aspect-3/4 flex items-center justify-center lg:h-14 bg-neutral-disabled'>
          <Image />
        </div>
      )}
      <div className='flex flex-col w-49.5 lg:w-69 overflow-hidden whitespace-nowrap'>
        <p className='body-bold truncate'>{postTitle}</p>
        <p className='truncate'>{message}</p>
      </div>
      <div className='h-full flex flex-col justify-start items-end gap-xs'>
        <p className='text-neutral-tertiary'>{time}</p>
        {!wasRead && (
          <div className='flex justify-center rounded-full bg-brand-primary text-neutral-inverse-primary w-5 h-5 lg:w-6 lg:h-6'>
            <p>2</p>
          </div>
        )}
      </div>
    </NavLink>
  );
}
