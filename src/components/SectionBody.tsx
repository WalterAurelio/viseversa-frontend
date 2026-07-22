import type { PropsWithChildren } from 'react';

export default function SectionBody({ children }: PropsWithChildren) {
  return <p className='h6-normal'>{children}</p>;
}
