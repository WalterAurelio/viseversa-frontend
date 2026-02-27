import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { useState } from 'react';

const variants = cva(
  [
    'py-2 px-4 my-1 max-w-52.5 lg:max-w-125 w-fit rounded rounded-b-[var(--radius-custom-m)] body-regular',
  ],
  {
    variants: {
      owner: {
        other:
          'rounded-l-none rounded-tr-[var(--radius-custom-m)] bg-background-neutral-primary text-text-neutral-primary',
        self: 'rounded-r-none rounded-tl-[var(--radius-custom-m)] bg-background-brand-primary text-text-neutral-inverse-primary',
      },
    },
  }
);

type MessageProps = VariantProps<typeof variants> & {
  text: string;
  maxLength?: number;
};

export default function Message({
  text,
  owner,
  maxLength = 400,
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
    </div>
  );
}
