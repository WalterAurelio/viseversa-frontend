import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

type StatusPinProps = {
  status?: 'online' | 'offline';
} & WithClassName;

function StatusPin({ status = 'offline', className }: StatusPinProps) {
  return (
    <div
      className={cn(
        'w-3 aspect-square border-2 border-neutral-inverse-primary rounded-full',
        {
          'bg-miscellaneous-primary': status === 'online',
          'bg-neutral-inverse-tertiary': status === 'offline',
        },
        className
      )}
    ></div>
  );
}
export default StatusPin;
