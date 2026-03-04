import Avatar from './Avatar';
import Trash from '../assets/icons/Trash.svg?react';

/* Falta tipar, de acuerdo a las diferentes notificaciones que vayamos a mostrar. */

function Notification() {
  return (
    <div className='flex justify-center items-center p-l gap-s w-fit lg:hover:bg-background-brand-tertiary'>
      <Avatar />

      <div className='flex w-60 flex-col gap-xs'>
        <div className='flex items-center gap-xs'>
          <p className='small-bold select-none'>john_doe_123:</p>
          <p className='small-normal select-none'>solicita un intercambio.</p>
        </div>
        <p className='small-normal overflow-hidden text-text-neutral-tertiary text-ellipsis whitespace-nowrap select-none'>
          Publicación: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <button className='lg:cursor-pointer'>
        <Trash />
      </button>
    </div>
  );
}
export default Notification;
