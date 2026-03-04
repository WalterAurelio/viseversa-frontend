import Image from '../assets/icons/Image.svg?react';

type QueryCardProps = {
  description: string;
  img: string;
  alt?: string;
}

export default function QueryCard({ description, img, alt = '',}: QueryCardProps) {
  return (
    <div className='flex flex-col gap-m max-w-100'>
     {img ? (
        <img
          src={img}
          alt={alt}
          className='w-full aspect-3/4 object-cover object-center rounded-custom-xl'
        />
      ) : (
        <div className='w-full aspect-3/4 bg-background-neutral-tertiary flex items-center justify-center rounded-custom-xl'>
          <Image />
        </div>
      )}
      <p className='body-regular text-text-neutral-tertiary'>{description}</p>
    </div>
  );
}
