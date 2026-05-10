import { cn } from '../utils/cn';

type DummyProps = {
  opacity?: 'full' | 'null';
};

function Dummy({ opacity = 'full' }: DummyProps) {
  return (
    <div
      className={cn('w-full h-px bg-neutral-disabled', {
        'opacity-0': opacity === 'null',
      })}
    ></div>
  );
}
export default Dummy;
