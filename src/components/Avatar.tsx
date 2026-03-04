import UserCircle from '../assets/icons/UserCircle.svg?react';
import { cn } from '../utils/cn';
import StatusPin from './StatusPin';

type AvatarProps = {
  size?: 'S' | 'M' | 'L' | 'XL';
  hasUsername?: boolean;
  username?: string;
  hasStatusPin?: boolean;
  img?: string;
} & Omit<React.ComponentProps<typeof StatusPin>, 'className'>;

function Avatar({ img, size = 'S', hasUsername = false, username = 'john_doe_123', hasStatusPin = false, status }: AvatarProps) {
  return (
    <div className='flex items-center gap-m'>
      <div className='relative'>
        {img ? (
          <img
            src={img}
            alt='User profile pic'
            className={cn('aspect-square rounded-full object-cover object-center', {
              'w-8': size === 'S',
              'w-12': size === 'M',
              'w-17': size === 'L',
              'w-30.5': size === 'XL'
            })}
          />
        ) : (
          <div
            className={cn('flex aspect-square justify-center items-center rounded-full bg-background-neutral-disabled', {
              'w-8': size === 'S',
              'w-12': size === 'M',
              'w-17': size === 'L',
              'w-30.5': size === 'XL'
            })}
          >
            <UserCircle />
          </div>
        )}

        {hasStatusPin && (
          <StatusPin
            className={cn('absolute right-0 bottom-0', {
              'right-1.5': size === 'L',
              'right-3 bottom-3': size === 'XL'
            })}
            status={status}
          />
        )}
      </div>
      {hasUsername && <p>{username}</p>}
    </div>
  );
}
export default Avatar;
