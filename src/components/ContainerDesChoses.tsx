import type { PropsWithChildren } from 'react';
import { cn } from '../utils/cn';

type ContainerDesChosesProps = PropsWithChildren & {
  orientation?: 'horizontal' | 'vertical';
};

function ContainerDesChoses({ orientation = 'horizontal', children }: ContainerDesChosesProps) {
  return (
    <div
      className={cn('flex gap-m', {
        'flex-row': orientation === 'horizontal',
        'flex-col': orientation === 'vertical'
      })}
    >
      {children}
    </div>
  );
}
export default ContainerDesChoses;
