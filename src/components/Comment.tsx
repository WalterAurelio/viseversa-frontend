import Image from '../assets/icons/Image.svg?react';

type CommentProps = {
  username?: string;
  comment?: string;
  img?: string;
  alt?: string;
};

export default function Comment({
  username = 'john_doe_123',
  comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  img,
  alt = '',
}: CommentProps) {
  return (
    <div className='flex gap-xs'>
      <p className='body-bold'>{username}:</p>
      <div className='flex flex-col'>
        <p>{comment}</p>
        {img ? (
          <img
            className='max-w-50 aspect-3/4 object-cover object-center'
            src={img}
            alt={alt}
          />
        ) : (
          <div className='max-w-50 aspect-3/4 bg-neutral-tertiary flex items-center justify-center'>
            <Image className='h-6 w-6' />
          </div>
        )}
      </div>
    </div>
  );
}
