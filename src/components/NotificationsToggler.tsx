import type { NotificationProps } from './Notification';
import Notification from './Notification';
import Bell from '../assets/icons/Bell.svg?react';
import { useState } from 'react';

type NotificationsTogglerProps = {
  notifs: NotificationProps[];
};

export default function NotificationsToggler({
  notifs,
}: NotificationsTogglerProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-end w-fit gap-s'>
      <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
        <Bell />
      </button>
      <div
        className={`absolute bg-neutral-primary w-86 rounded-border-xl overflow-hidden transition duration-300 ease-out delay-300 ${isOpen ? 'translate-y-8 right-0 opacity-100' : '-translate-y-90 opacity-0 '}`}
      >
        <p className='body-bold px-l py-l'>Notificaciones</p>
        <div>
          {notifs.map((n, index) => (
            <Notification
              key={index}
              username={n.username}
              type={n.type}
              content={n.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
