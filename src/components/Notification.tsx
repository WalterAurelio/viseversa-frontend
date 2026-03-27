import Avatar from './Avatar';
import Trash from '../assets/icons/Trash.svg?react';

const actions: {
  comentario: string;
  solicitudIntercambio: string;
  intercambioCompleto: string;
} = {
  comentario: 'te comentó',
  solicitudIntercambio: 'solicita un intercambio',
  intercambioCompleto: 'Intercambio exitoso',
};

export type NotificationProps = {
  username: string;
  type: 'comentario' | 'solicitudIntercambio' | 'intercambioCompleto';
  content: string;
};

function Notification({
  username = 'John_Doe_123',
  type = 'comentario' ,
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}: NotificationProps) {
  return (
    <div className='flex justify-center items-center p-l gap-s w-fit lg:hover:bg-background-brand-tertiary'>
      <Avatar />
      <div className='flex w-60 flex-col gap-xs'>
        <div className='flex items-center gap-xs'>
          {type === 'intercambioCompleto' ? (
            <p className='small-bold select-none'>
              {actions[type]}
            </p>
          ) : (
            <p className='small-normal select-none'>
              <span className='small-bold'>{username}</span> {actions[type]}
            </p>
          )}
        </div>
        <p className='small-normal overflow-hidden text-text-neutral-tertiary text-ellipsis whitespace-nowrap select-none'>
          {content}
        </p>
      </div>
      <button className='lg:cursor-pointer'>
        <Trash />
      </button>
    </div>
  );
}
export default Notification;
