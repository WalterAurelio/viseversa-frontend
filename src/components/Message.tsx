import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';
import { useState } from 'react';

const variants = cva(['py-2 px-4 my-1 max-w-52.5 lg:max-w-125 w-fit rounded rounded-b-[var(--radius-custom-m)] body-regular'],{
  variants: {
    orientation: {
      left: 'rounded-l-none rounded-tr-[var(--radius-custom-m)]',
      right: 'rounded-r-none rounded-tl-[var(--radius-custom-m)]',
    },
    colour: {
      red: 'bg-background-brand-primary text-text-neutral-inverse-primary',
      white: 'bg-background-neutral-primary text-text-neutral-primary',
    }
  }
});

type MessageProps = {
  text: string;
  owner: 'me' | 'other';
  maxLength?: number;
}

export default function Message({ text, owner, maxLength = 400} : MessageProps) {
  const [textLength, setTextLength] = useState(maxLength);
  const { orientation, colour } = owner === 'me' 
  ? { orientation: 'right' as const , colour: 'red' as const } 
  : { orientation: 'left' as const, colour: 'white' as const };

  return (
    <div className={cn(variants({ orientation, colour }))}>
      {text.length > textLength ? text.slice(0, maxLength) + '... ' : text}
      {text.length > textLength && <button className='font-bold cursor-pointer hover:underline' onClick={() => setTextLength(text.length)}>Leer más</button>}
    </div>
  )
}