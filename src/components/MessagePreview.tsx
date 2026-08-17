import { NavLink } from 'react-router';
import Image from '../assets/icons/Image.svg?react';
import { useState } from 'react';

type MessagePreviewProps = {
  postTitle?: string;
  message?: string;
  time?: string;
  img?: string;
};

export default function MessagePreview({
  img = '',
  postTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  time = '10:00'
}: MessagePreviewProps) {
  const [wasRead, setWasRead] = useState(false);

  return (
    <NavLink
      to={`/${postTitle}`}
      className={({ isActive }) =>
        `flex w-[288px] items-center gap-s hover:bg-brand-tertiary lg:h-16 lg:w-100 ${isActive ? 'bg-brand-tertiary' : ''} justify-evenly rounded-border-s px-s py-xs`
      }
      onClick={() => setWasRead(true)}
    >
      {img ? (
        <img className="w-12 lg:w-14" src={img} alt="Imagen del producto" />
      ) : (
        <div className="flex aspect-3/4 h-12 items-center justify-center bg-neutral-disabled lg:h-14">
          <Image />
        </div>
      )}
      <div className="flex w-49.5 flex-col overflow-hidden whitespace-nowrap lg:w-69">
        <p className="truncate label">{postTitle}</p>
        <p className="truncate">{message}</p>
      </div>
      <div className="flex h-full flex-col items-end justify-start gap-xs">
        <p className="text-neutral-tertiary">{time}</p>
        {!wasRead && (
          <div className="flex h-5 w-5 justify-center rounded-full bg-brand-primary text-neutral-inverse-primary lg:h-6 lg:w-6">
            <p>2</p>
          </div>
        )}
      </div>
    </NavLink>
  );
}
