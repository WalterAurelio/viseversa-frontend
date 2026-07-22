import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { useState } from 'react';

const variants = cva(
  ['py-s px-l my-xs max-w-52.5 lg:max-w-125 w-fit rounded rounded-b-border-l'],
  {
    variants: {
      owner: {
        other:
          'rounded-l-none rounded-tr-border-l bg-neutral-primary text-neutral-primary',
        self: 'rounded-r-none rounded-tl-border-l bg-brand-primary text-neutral-inverse-primary',
      },
    },
  }
);

type MessageProps = VariantProps<typeof variants> & {
  text: string;
  maxLength?: number;
  time?: string;
};

export default function Message({
  text,
  owner,
  maxLength = 400, time = '10:30' 
}: MessageProps) {
  const [textLength, setTextLength] = useState(maxLength);

  return (
    <div className={cn(variants({ owner }))}>
      {text.length > textLength ? text.slice(0, maxLength) + '... ' : text}
      {text.length > textLength && (
        <button
          className='font-bold cursor-pointer hover:underline'
          onClick={() => setTextLength(text.length)}
        >
          Leer más
        </button>
      )}
      <p className='text-right'>{time}</p>
    </div>
  );
}
