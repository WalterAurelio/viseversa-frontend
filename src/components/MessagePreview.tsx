import { NavLink } from 'react-router';
import Avatar from './Avatar';

type MessagePreviewProps = {
  username?: string;
  message?: string;
  time?: string;
  img?: string;
};

export default function MessagePreview({
  img = '',
  username = 'Username',
  message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  time = '10:00',
}: MessagePreviewProps) {
  return (
    <NavLink 
      to={`/${username}`} 
      className={({ isActive }) =>
        `flex gap-s items-center hover:bg-background-neutral-secondary ${isActive ? 'bg-background-neutral-secondary' : ''} rounded-border-s max-w-fit px-xs py-xs`
      }
    >
      <Avatar size='M' img={img}/>
      <div className='flex flex-col overflow-hidden whitespace-nowrap'>
        <p className='body-bold'>{username}</p>
        <p className='truncate'>{message}</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-text-neutral-tertiary'>{time}</p>
        <div className='flex justify-center rounded-full bg-background-brand-primary text-text-neutral-inverse-primary w-5 h-5 lg:w-6 lg:h-6'>
          <p>2</p>
        </div>
      </div>
    </NavLink>
  );
}
