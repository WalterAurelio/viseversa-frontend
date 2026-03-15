import Image from '../assets/icons/Image.svg?react';

type QueryCardProps = {
  description: string;
  img: string;
  alt: string;
};

export default function QueryCard({
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img,
  alt = '',
}: QueryCardProps) {
  return (
    <div className='flex flex-col gap-m max-w-100'>
      {img ? (
        <img
          src={img}
          alt={alt}
          className='w-full aspect-3/4 object-cover object-center rounded-border-xl'
        />
      ) : (
        <div className='w-full aspect-3/4 bg-background-neutral-tertiary flex items-center justify-center rounded-border-xl'>
          <Image className='h-6 w-6'/>
        </div>
      )}
      <p className='text-text-neutral-tertiary'>{description}</p>
    </div>
  );
}
